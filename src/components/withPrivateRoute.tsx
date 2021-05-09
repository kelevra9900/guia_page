import { useRouter } from 'next/router';


const withAuth = (WrappedComponent: any) => {
    return (props:any) => {
        if(typeof window !== 'undefined'){
            const Router = useRouter();

            const token = localStorage.getItem('token');

            if(!token){
                Router.replace("/");
                return null;
            }

            return <WrappedComponent {...props}/>
        }
        return null;
    }
}

export default withAuth;
