const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: 4,
        maxLength: 50,
    },
    lastName: {
        type: String
    },
    emailID: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email address");
            }
        }
    },
    password: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        min: 18,
    },
    gender: {
        type: String,
        validate(value) {
            if(!["male", "female", "others"].includes(value)){
                throw new Error("Gender data is not valid");
            }
        }

        
    },
    skills: {
        type: String,
    },
    photoURL: {
        type: String,
        default : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK8AAACUCAMAAADS8YkpAAAAMFBMVEXk5ueutLe/w8WrsbTn6erh4+SorrHFycuxt7rT1tje4OLb3d/Q09W6v8HM0NLX2tzgILVHAAAEHUlEQVR4nO2c0XKsIAxABYKAgv7/317UXbvrdbdAMKEznodO+3YmE0KE0K67ubm5ubm5ubm5ubm5ufkLAHSj8947Nyy/twx0ejZB9TtKTrPuGpWGbjZWKSVeiH9aM7doDDAF8ea6K4vgW0sM6Lw6k306W9eUMcyh/2y70IexGWHozGkmHEI8cXs+AB1+tV2NQxMRhvn34D6ExcgtG3GJtguWPYnBpds2IAw50V1zQnMKw5CpGxk4dW22rgqaT9jkh1cow5URMP2yqZ3TOx7hkuTd4MkISNvW/ocnI8CXhleImUFYh2JdJel1Mze2gzBDI1Gavasvfas2FtWyJz21LkhEeBlKBKDCGxs1Wt3OYX1pNzkoL2Yb1AmR35gdfCXlpgwz1jd+aVD6TlhdoWZK35LG9+BLeRyhcdV39TWUvpjN+AHlljyil1tccJS+eF0h6HSr+CpC3xmfvqIn3DBu34t98bpCEfr+tfVWo/5S1rMB2/4K2v2iwn5M+4n8x/ozmPC+jtLXY3UF7V0RvkDQHrNX+D6m1K3wQTTRfs8P2PMS4hNKQIaX+oASPO58kvyEfcDFl/5CALPiGG5cSu42d6hPU1fh8gCT9g47utiX5wq5uEQorgvZsi5YSa4L76KuR3Esto2yK1mOy9incH6NUMSNzkE49yC4p+0j/yPzy5Nvre3kCHNczB+AjJTgG915BUyiLe9S+yFtaE4RX8F+AeB8tPpNV7Y0FQ4+fJuvFio0E9wN0N5+an9UHzzr2OQpoF3oT2KsVKC8es0AYDDBLm8YdqwNU8uvRqKym4wMC9KYyQ0Ny24sgnqI6Phr07Kw/YAfWiphr0QzPYxzTAUTYgY/UljE7JVm8vM4dO0kcQyjXnPWPizfi8MmHnPZj5rfeXE11i5F4fvutkV74lx+MQdGY89K7mftvpdOc+wdS+HKlH0qC+lH4oUIsLzLKz0viduI9ITGABN6/ExYQ5MWMRGm1AdD35V7SfDwMLYIVWxXYyXdtcbQGVvLdjUW4dLTk6l4jX1WvuqwEjr3sSPHccnKAy0vkRXXfCyBq5q4B2Fh6u7TMbjXpMJuXPWFA4wXBvcp7Ovp+st1RcWztQrDvmnClSaQzLWp+0qF16gVRpPTsejdrviRWyHYCBPrCoWLMGUybGAGOagqwyvKFvc/FabMSigdVATcE7diCu+QQNcYQi3CFwkzJO8DW/DGHvNcF0vJ7Gr5NEYF+uyMQL7PRJOrixzXwpJ7EwqXfawlkvePQ6DGgwUUmfOrfLVsJ2dbZs7ehZzLcabG4UCGL7fqQp++4rDDyFVIb3s42t4TkufUgK0xe8OmXpNjJmVrklghwLXhm7pltFHN0k+yG1luQoS0tp30ROcraZ/2OqhGSCsQ2shGSCxo0Appuk3zD9hoOmr47uRoAAAAAElFTkSuQmCC",
    },
    
});

const User = mongoose.model("User", userSchema);
module.exports = User;
