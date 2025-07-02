// C'Groovy Main JavaScript File

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            
            // Animate hamburger to X
            const spans = this.querySelectorAll('span');
            spans.forEach(span => span.classList.toggle('active'));
        });
    }
    
    // Dropdown Toggle for Mobile
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('.nav-link');
        
        if (window.innerWidth <= 800) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            });
        }
    });
    
    // Image Slider
    initSlider();
    
    // Genre Tabs
    const genreTabs = document.querySelectorAll('.genre-tab');
    
    if (genreTabs.length > 0) {
        genreTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // Remove active class from all tabs
                genreTabs.forEach(t => t.classList.remove('active'));
                
                // Add active class to clicked tab
                this.classList.add('active');
                
                // Hide all genre content
                const genreContents = document.querySelectorAll('.genre-content');
                genreContents.forEach(content => content.classList.remove('active'));
                
                // Show corresponding content
                const targetId = this.getAttribute('data-target');
                document.getElementById(targetId).classList.add('active');
            });
        });
    }
});

// Image Slider Function
function initSlider() {
    const slider = document.querySelector('.slider');
    
    if (!slider) return;
    
    const slides = slider.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let currentSlide = 0;
    const slideCount = slides.length;
    
    // Set initial position
    updateSlider();
    
    // Auto slide
    let slideInterval = setInterval(nextSlide, 5000);
    
    // Next slide function
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slideCount;
        updateSlider();
    }
    
    // Previous slide function
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slideCount) % slideCount;
        updateSlider();
    }
    
    // Update slider position
    function updateSlider() {
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
    
    // Event listeners for buttons
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            clearInterval(slideInterval);
            prevSlide();
            slideInterval = setInterval(nextSlide, 5000);
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            clearInterval(slideInterval);
            nextSlide();
            slideInterval = setInterval(nextSlide, 5000);
        });
    }
}

// Form Validation Functions
function validateForm() {
    let isValid = true;
    
    // Get form elements
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const ageInput = document.getElementById('age');
    const genderInputs = document.querySelectorAll('input[name="gender"]');
    const termsCheckbox = document.getElementById('terms');
    
    // Validate Name (must not be empty and at least 3 characters)
    if (nameInput) {
        if (!validateName(nameInput.value)) {
            showError(nameInput, 'Name must be at least 3 characters long');
            isValid = false;
        } else {
            hideError(nameInput);
        }
    }
    
    // Validate Email (must be a valid email format)
    if (emailInput) {
        if (!validateEmail(emailInput.value)) {
            showError(emailInput, 'Please enter a valid email address');
            isValid = false;
        } else {
            hideError(emailInput);
        }
    }
    
    // Validate Password (must be at least 8 characters with at least one number)
    if (passwordInput) {
        if (!validatePassword(passwordInput.value)) {
            showError(passwordInput, 'Password must be at least 8 characters and contain at least one number');
            isValid = false;
        } else {
            hideError(passwordInput);
        }
    }
    
    // Validate Age (must be between 13 and 120)
    if (ageInput) {
        if (!validateAge(ageInput.value)) {
            showError(ageInput, 'Age must be between 13 and 120');
            isValid = false;
        } else {
            hideError(ageInput);
        }
    }
    
    // Validate Gender (one must be selected)
    if (genderInputs.length > 0) {
        if (!validateGender(genderInputs)) {
            const genderGroup = document.querySelector('.radio-group');
            showGroupError(genderGroup, 'Please select your gender');
            isValid = false;
        } else {
            const genderGroup = document.querySelector('.radio-group');
            hideGroupError(genderGroup);
        }
    }
    
    // Validate Terms (must be checked)
    if (termsCheckbox) {
        if (!validateTerms(termsCheckbox.checked)) {
            const termsGroup = document.querySelector('.checkbox-group');
            showGroupError(termsGroup, 'You must agree to the terms and conditions');
            isValid = false;
        } else {
            const termsGroup = document.querySelector('.checkbox-group');
            hideGroupError(termsGroup);
        }
    }
    
    return isValid;
}

// Validation Helper Functions
function validateName(name) {
    // Name must not be empty and at least 3 characters
    return name.trim().length >= 3;
}

function validateEmail(email) {
    // Simple email validation without regex
    // Must have @ symbol and at least one dot after @
    if (email.trim() === '') return false;
    
    const atIndex = email.indexOf('@');
    if (atIndex === -1 || atIndex === 0) return false;
    
    const dotIndex = email.indexOf('.', atIndex);
    if (dotIndex === -1 || dotIndex === email.length - 1) return false;
    
    return true;
}

function validatePassword(password) {
    // Password must be at least 8 characters and contain at least one number
    if (password.length < 8) return false;
    
    // Check for at least one number
    let hasNumber = false;
    for (let i = 0; i < password.length; i++) {
        if (password[i] >= '0' && password[i] <= '9') {
            hasNumber = true;
            break;
        }
    }
    
    return hasNumber;
}

function validateAge(age) {
    // Age must be a number between 13 and 120
    const ageNum = parseInt(age);
    return !isNaN(ageNum) && ageNum >= 13 && ageNum <= 120;
}

function validateGender(genderInputs) {
    // At least one gender option must be selected
    let selected = false;
    genderInputs.forEach(input => {
        if (input.checked) {
            selected = true;
        }
    });
    
    return selected;
}

function validateTerms(checked) {
    // Terms checkbox must be checked
    return checked;
}

// Error Display Functions
function showError(input, message) {
    const formGroup = input.closest('.form-group');
    const errorElement = formGroup.querySelector('.error-message');
    
    input.classList.add('error');
    
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
}

function hideError(input) {
    const formGroup = input.closest('.form-group');
    const errorElement = formGroup.querySelector('.error-message');
    
    input.classList.remove('error');
    
    if (errorElement) {
        errorElement.style.display = 'none';
    }
}

function showGroupError(group, message) {
    const errorElement = group.nextElementSibling;
    
    if (errorElement && errorElement.classList.contains('error-message')) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
}

function hideGroupError(group) {
    const errorElement = group.nextElementSibling;
    
    if (errorElement && errorElement.classList.contains('error-message')) {
        errorElement.style.display = 'none';
    }
}

// Submit Event Handler
document.querySelector("form").addEventListener("submit", function(event) {
    // Cegah form terkirim secara default
    event.preventDefault();

    // Panggil fungsi validasi
    const formIsValid = validateForm();

    // Jika form valid, kirim form
    if (formIsValid) {
        this.submit();
    } else {
        // Jika tidak valid, tampilkan pop up peringatan
        alert("Terdapat data yang masih kosong atau tidak valid.");
    }
});


