<template>
    <form id="contac-form" ref="form" @submit.prevent="sendEmail">
        <input type="hidden" name="contact_number" />
        <div class="edit-form">
            <input placeholder="Name" type="text" name="name" id="name-form" required />
            <input placeholder="Last name" type="text" name="lastName" id="lastName-form" required />
        </div>
        <div class="edit-form">
            <input placeholder="E-mail" type="email" name="email" required />
            <input placeholder="Phone number" type="text" name="phone" required />
        </div>
        <div class="edit-form">
            <input placeholder="Company" type="text" name="company" id="company-form" required />
            <input placeholder="Function" type="text" name="function" id="function-form" required />
        </div>
        <textarea placeholder="Reason" rows="4" name="message"></textarea>
        <input type="submit" value="Send" id="submit"/>
        
    </form>
</template>
  
<script>
import emailjs from '@emailjs/browser';
export default {
    name: "Form",
    methods: {
        sendEmail() {
            emailjs.sendForm('service_ozfvgtv', 'template_7bsxc3m', this.$refs.form, 'NpuBHe_vpdYjJ_LMf')
                .then((result) => {
                    console.log('SUCCESS!', result.text);
                    alert('email sent')
                    document.getElementById("contac-form").reset();
                }, (error) => {
                    console.log('FAILED...', error.text);
                });
        }
    }
}
</script>
  
<style scoped>
form {
    gap: 10px;
    width: 100%;
    display: block;
    margin: 0 auto;
}
.edit-form{
    display: flex;
    gap: 15px;
    margin-bottom: 15px;
   
}

form input, form textarea {
  width: 100%;
  color: var(--vs-color);
    border: 1px solid var(--vs-color);
    font-size: 0.875rem;
    padding: 14px 10px;
    border-radius: 2px;
    font-family: 'Poppins', sans-serif;
    background: rgba(0,0,0,0);
    }



form input[type=submit]{
    width: 50%;
    padding: 15px 0;
    margin-left: 50%;
    background-color: var(--vs-color);
    color: white;
    border: none;
    font-size: 1.125rem;
    margin-top: 12px;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
}

::placeholder {
  color: var(--vs-color);
  opacity: 1; /* Firefox */
}

@media (max-width: 720px) {
    
}

</style>