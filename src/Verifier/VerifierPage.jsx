const onSubmitFormVerifyMessage = async function(event){
    event.preventDefault();
    if (window?.ethereum) {
        const signerAddress = await ethers.utils.verifyMessage(message, signature);
        setSignerAddress(signerAddress);
    } else {
        alert('Browser wallet connection not supported!');
    }

    return(
        <button>
       
        </button>
    )
};