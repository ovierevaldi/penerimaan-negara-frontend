import { redirect } from "next/navigation";

export default function Page() {
  const login = false;
    // kalo belom login
    if (!login) {
      redirect('login')
    }
    else{
      redirect('dashboard')
    }
    return(
    <main>
      
    </main>
    )
}