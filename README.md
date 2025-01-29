# HelpMate

## Database design 
- User
```
{
    id : string,
    name : string,
    email : string,
    username : string,
    imageUrl : string,
    createdAt : Date,
    updatedAt : Date,
    clerkId : string,
    booking : ref,
    events : ref,
    avalaibility : ref,
    role : string,
    about : string,
}
```
- Event
```
{
    id : string,
    title : string,
    description : string,
    duration : int,
    userId : string,
    isPrivate : boolean,
    createdAt : Date,
    updatedAt : Date,
    booking : ref,
}
```
- Booking
```
{
    id : string,
    eventId : string,
    userId : string,
    name : string,
    email : string,
    additionalInfo : string,
    startTime : Date,
    endTime : Date,
    meetingLink : string,
    googleEventId : string,
    createdAt : Date,
    updatedAt : Date,
}
```
- Availability
```
{
    id : string,
    userId : string,
    timeGap : int,
    createdAt : Date,
    updatedAt : Date,
    days : ref
}
```
- Day
```
```

Here's a comprehensive Clerk documentation for a Next.js application:

# Clerk Integration Guide for Next.js

## Table of Contents
1. [Setup & Installation](#setup)
2. [Authentication Pages](#auth-pages)
3. [Protected Routes](#protected-routes)
4. [Common Components](#components)
5. [Hooks](#hooks)
6. [Server-Side Functions](#server)
7. [API Routes](#api)
8. [Customization](#customization)
9. [Error Handling](#errors)
10. [Deployment](#deployment)

---

## <a name="setup"></a>1. Setup & Installation

### 1.1 Install Dependencies
```bash
npm install @clerk/nextjs
```

### 1.2 Environment Variables
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key
```

### 1.3 Wrap App with ClerkProvider
`app/layout.tsx` (App Router):
```tsx
import { ClerkProvider } from '@clerk/nextjs'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  )
}
```

---

## <a name="auth-pages"></a>2. Authentication Pages

### 2.1 Sign In Page
`app/sign-in/[[...sign-in]]/page.tsx`:
```tsx
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return <SignIn path="/sign-in" />;
}
```

### 2.2 Sign Up Page
`app/sign-up/[[...sign-up]]/page.tsx`:
```tsx
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return <SignUp path="/sign-up" />;
}
```

---

## <a name="protected-routes"></a>3. Protected Routes

### 3.1 Middleware (App Router)
`middleware.ts`:
```ts
import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware();

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
```

### 3.2 Client-Side Protection
```tsx
import { useAuth } from "@clerk/nextjs";

function ProtectedPage() {
  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    return <div>Redirecting to login...</div>;
  }

  return <div>Protected Content</div>;
}
```

---

## <a name="components"></a>4. Common Components

### 4.1 User Button
```tsx
import { UserButton } from "@clerk/nextjs";

function Header() {
  return (
    <header>
      <UserButton afterSignOutUrl="/" />
    </header>
  );
}
```

### 4.2 Sign Out Button
```tsx
import { SignOutButton } from "@clerk/nextjs";

function Logout() {
  return (
    <SignOutButton>
      <button>Sign Out</button>
    </SignOutButton>
  );
}
```

### 4.3 User Profile
```tsx
import { UserProfile } from "@clerk/nextjs";

function ProfilePage() {
  return <UserProfile path="/user-profile" />;
}
```

---

## <a name="hooks"></a>5. Hooks

### 5.1 useAuth
```tsx
const { userId, sessionId, getToken } = useAuth();
```

### 5.2 useUser
```tsx
import { useUser } from "@clerk/nextjs";

const { user } = useUser();

console.log(user?.fullName);
console.log(user?.primaryEmailAddress?.emailAddress);
```

### 5.3 useSession
```tsx
import { useSession } from "@clerk/nextjs";

const { session } = useSession();
```

---

## <a name="server"></a>6. Server-Side Functions

### 6.1 Get Auth State (Server Components)
```tsx
import { auth } from "@clerk/nextjs";

export default function Page() {
  const { userId } = auth();
  
  if (!userId) {
    // Handle unauthorized
  }
  
  return <div>User ID: {userId}</div>;
}
```

### 6.2 Get Token for Backend Calls
```tsx
const token = await getToken({ template: "your_template_name" });
```

---

## <a name="api"></a>7. API Routes

### 7.1 Protect API Routes
```ts
import { auth } from "@clerk/nextjs";

export async function GET() {
  const { userId } = auth();
  
  if (!userId) {
    return new Response("Unauthorized", { status: 401 });
  }
  
  // Your protected logic
}
```

---

## <a name="customization"></a>8. Customization

### 8.1 Styling Components
```tsx
<SignIn
  appearance={{
    elements: {
      formButtonPrimary: "bg-red-500 hover:bg-red-600",
      headerTitle: "text-2xl font-bold"
    }
  }}
/>
```

### 8.2 Custom Redirects
```tsx
<SignIn afterSignInUrl="/dashboard" />
<SignUp afterSignUpUrl="/welcome" />
```

---

## <a name="errors"></a>9. Error Handling

### 9.1 Catch Clerk Errors
```tsx
try {
  // Clerk operation
} catch (error) {
  if (error instanceof ClerkError) {
    console.error("Clerk Error:", error.message);
  }
}
```

---

## <a name="deployment"></a>10. Deployment

### 10.1 Required Settings
- Add production keys in environment variables
- Configure allowed redirect URLs in Clerk Dashboard
- Set JWT key if using custom templates

### 10.2 Vercel Configuration
```env
CLERK_SECRET_KEY=your_production_secret_key
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_production_publishable_key
```

---

## Additional Features:
- **Organization Management**: Use `<OrganizationSwitcher />` and `<CreateOrganization />`
- **Webhooks**: Handle user events with Clerk webhooks
- **Passwordless Auth**: Configure in Clerk Dashboard
- **Social Logins**: Add Google, GitHub, etc. through Dashboard
- **Multi-Session**: Handle multiple active sessions
- **Custom Tokens**: Create JWT templates for backend services

For complete documentation, refer to the [official Clerk docs](https://clerk.com/docs).