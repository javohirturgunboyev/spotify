import axios from 'axios'
const getToken = async () => {
    try {
        const CLIENT_ID = "ca0d271d96fa49158a342a7240f69ade"
        const CLIENT_SECRET = "778214ead741490fad33b8b72591119f"
        const response = await fetch("https://accounts.spotify.com/api/token", {
            method:"POST",
            headers:{
                "Content-Type":"application/x-www-form-urlencoded",
                "Authorization":`Basic ${btoa(CLIENT_ID + ":" + CLIENT_SECRET)}`
            },
            body:"grant_type=client_credentials"
        })
        const auth = await response.json()
        localStorage.setItem(
            "access_token",`${auth.token_type} ${auth.access_token}`
        )
    } catch (error) {
        console.log(error)
    }
}
export {getToken}


// const CLIENT_ID = "ca0d271d96fa49158a342a7240f69ade"
//         const CLIENT_SECRET = "778214ead741490fad33b8b72591119f"