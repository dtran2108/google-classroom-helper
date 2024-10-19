import GoogleLoginBtn from '@/components/google-login-btn';
import SparklesText from '@/components/ui/sparkles-text';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <SparklesText className="mb-8 text-5xl" text="Google Classroom Helper" />
      <GoogleLoginBtn />
    </div>
  );
}
