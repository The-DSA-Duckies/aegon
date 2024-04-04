import Button from "@mui/material/Button";
import { useSignIn } from "@clerk/nextjs";
 
export default function AuthLogin(props) {
    const { isLoaded, signIn, setActive } = useSignIn();

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if (props.userValue === "" && props.passValue === "") {
            props.setErrorMessage("Please enter a username and password");
            return;
        }
        if (props.userValue === "") {
            props.setErrorMessage("Please enter a username");
            return;
        }
        if (props.passValue === "") {
            props.setErrorMessage("Please enter a password");
            return;
        }
        if (!isLoaded) {
            return;
        }
     
        try {
            const result = await signIn.create({
                identifier: props.userValue,
                strategy: "password",
                password: props.passValue
            });
     
            if (result.status === "complete") {
                await setActive({ session: result.createdSessionId });
                props.setErrorMessage(result.status);
                props.handleNavigate('/assignments');
            }
            else {
                /*Investigate why the sign-in hasn't completed */
                props.setErrorMessage(result.status);
            }
        } 
        catch (err) {
          props.setErrorMessage(err.errors[0].longMessage);
        }
    }

    return (
        <Button
            onClick={handleSubmit}
            sx={{
                fontSize: '2rem',
                padding: '0.5em 1em',
                marginTop: '1em',
                color: 'white',
                backgroundColor: '#1c65ee',
                whiteSpace: 'nowrap',
                fontWeight: 'bold',
                '&:hover': { backgroundColor: '#1c65ee'}
            }}
        >
            Login
        </Button>
    );
}