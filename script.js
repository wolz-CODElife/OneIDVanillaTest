import OneId from './node_modules/oneid-sdk/index.js'
        window.addEventListener('load', () => {
            const options = {
                apiKey: "vxCgAQ==.fUF/4jTXK8FTGqqt31iDUIpMkYXr3y+Lwxy9pMtVW2Y=",
                siteDomain: "http://127.0.0.1:5500"
            }
            OneId.start(options)

            document.querySelector("#loginBtn").addEventListener("click", (e) => {
                e.preventDefault()
                OneId.handleAuth({
                    type: "login",
                    scope: "profile"
                }).then((data) => {
                    console.log(data);
                    if(OneId.isAuthenticated()) {
                        window.location.assign("/dashboard")
                    }
                })
            })
        })