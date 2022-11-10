import React, { useState } from "react";
import { Box, Button , TextField , Typography } from "@mui/material";
import { EndpointLogin } from "../../../config/global";
import { NavLink } from "react-router-dom";



const Auth = () => {
		const [isSignup, setIsSignup] = useState(false);
		console.log(isSignup);



	return (
		<div>
			<form>
				<Box
				display="flex"
				flexDirection={"column"}
				maxWidth={400}
				alignItems="center"
				justifyContent={"center"}
				margin="auto"
				marginTop={5}
				padding={3}
				borderRadius={5}
						boxShadow={'5px 5px 10px #ccc'}

						sx={{
							":hover": {
								boxShadow: "10px 10px 20px #ccc",
							},
						}}
				>
					<Typography variant="h3" padding={3} textAlign="center">
					{isSignup ? "Signup" : "Login"}
					</Typography>
					{isSignup && <TextField margin="normal" type={'text'} variant="outlined" placeholder="Name" />}
					<TextField margin="normal" type={'email'} variant="outlined" placeholder="Email"/>
					<TextField margin="normal" type={'password'} variant="outlined" placeholder="Password"/>
					<Button
						sx={{ marginTop: 3, borderRadius: 3 }}
						variant="contained"
						color="primary"
						type="submit"
					>
					{isSignup ? "Signup" : "Login"}
					</Button>
					<Button onClick={()=>setIsSignup(!isSignup)} sx={{ marginTop: 3, borderRadius: 3}}>
							Change to {isSignup ? "Login" : "Signup"}
					</Button>
					<NavLink className="button" to="/" style={{ textDecoration: "none" }}>
					<Button onClick={()=>setIsSignup(!isSignup)} sx={{ marginTop: 3, borderRadius: 3}}>
							Back to Dashboard
					</Button>
					</NavLink>
				</Box>

			</form>
		</div>
	)
}
export default Auth
