-- Create the second consultant account if it doesn't exist yet
DO $$
DECLARE
  new_id uuid := gen_random_uuid();
BEGIN
  IF NOT EXISTS (SELECT 1 FROM auth.users WHERE email = 'pankaj.a1gservices@gmail.com') THEN
    INSERT INTO auth.users (
      instance_id, id, aud, role, email, encrypted_password,
      email_confirmed_at, created_at, updated_at,
      raw_app_meta_data, raw_user_meta_data, is_sso_user, is_anonymous
    ) VALUES (
      '00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated',
      'pankaj.a1gservices@gmail.com', crypt('Pankaj@9876', gen_salt('bf')),
      now(), now(), now(),
      '{"provider":"email","providers":["email"]}'::jsonb, '{}'::jsonb, false, false
    );
    INSERT INTO auth.identities (
      id, user_id, provider_id, identity_data, provider, last_sign_in_at, created_at, updated_at
    ) VALUES (
      gen_random_uuid(), new_id, new_id::text,
      jsonb_build_object('sub', new_id::text, 'email', 'pankaj.a1gservices@gmail.com', 'email_verified', true, 'phone_verified', false),
      'email', now(), now(), now()
    );
  END IF;
END $$;

-- Grant admin role to the two authorised accounts only
INSERT INTO public.user_roles (user_id, role)
SELECT id, 'admin'::app_role FROM auth.users
WHERE email IN ('team.owlnestmedia@gmail.com', 'pankaj.a1gservices@gmail.com')
ON CONFLICT (user_id, role) DO NOTHING;

-- Remove any roles held by other accounts
DELETE FROM public.user_roles ur
USING auth.users u
WHERE ur.user_id = u.id
  AND u.email NOT IN ('team.owlnestmedia@gmail.com', 'pankaj.a1gservices@gmail.com');