// Form Validation Script
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    const fields = {
        firstName: document.getElementById('firstName'),
        lastName: document.getElementById('lastName'),
        email: document.getElementById('email'),
        password: document.getElementById('password'),
        confirmPassword: document.getElementById('confirmPassword'),
        subject: document.getElementById('subject'),
        message: document.getElementById('message')
    };

    // Create error message elements
    Object.keys(fields).forEach(fieldName => {
        if (fields[fieldName]) {
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.id = `${fieldName}Error`;
            errorDiv.setAttribute('role', 'alert');
            errorDiv.setAttribute('aria-live', 'assertive');
            fields[fieldName].parentNode.appendChild(errorDiv);
        }
    });

    // Validation functions
    function validateField(fieldName, value) {
        const errors = [];
        
        switch(fieldName) {
            case 'firstName':
            case 'lastName':
                if (!value.trim()) {
                    errors.push(`${fieldName === 'firstName' ? 'First' : 'Last'} name is required`);
                }
                break;
                
            case 'email':
                if (!value.trim()) {
                    errors.push('Email is required');
                } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    errors.push('Please enter a valid email address');
                }
                break;
                
            case 'password':
                if (!value) {
                    errors.push('Password is required');
                } else if (value.length < 8) {
                    errors.push('Password must be at least 8 characters');
                }
                break;
                
            case 'confirmPassword':
                if (!value) {
                    errors.push('Please confirm your password');
                } else if (value !== fields.password.value) {
                    errors.push('Passwords do not match');
                }
                break;
                
            case 'subject':
                if (!value.trim()) {
                    errors.push('Subject is required');
                }
                break;
                
            case 'message':
                if (!value.trim()) {
                    errors.push('Message is required');
                }
                break;
        }
        
        return errors;
    }

    // Show/hide error messages
    function showError(fieldName, errors) {
        const errorElement = document.getElementById(`${fieldName}Error`);
        const field = fields[fieldName];
        
        if (errors.length > 0) {
            errorElement.textContent = errors[0];
            errorElement.style.display = 'block';
            field.classList.add('error');
            field.setAttribute('aria-invalid', 'true');
            // Announce error to screen readers
            announceToScreenReader(`Error: ${errors[0]}`);
        } else {
            errorElement.style.display = 'none';
            field.classList.remove('error');
            field.setAttribute('aria-invalid', 'false');
        }
    }

    // Real-time validation on input
    Object.keys(fields).forEach(fieldName => {
        if (fields[fieldName]) {
            fields[fieldName].addEventListener('input', function() {
                const errors = validateField(fieldName, this.value);
                showError(fieldName, errors);
                
                // Also revalidate confirm password when password changes
                if (fieldName === 'password' && fields.confirmPassword.value) {
                    const confirmErrors = validateField('confirmPassword', fields.confirmPassword.value);
                    showError('confirmPassword', confirmErrors);
                }
            });

            // Validate on blur for better UX
            fields[fieldName].addEventListener('blur', function() {
                const errors = validateField(fieldName, this.value);
                showError(fieldName, errors);
            });
        }
    });

    // Screen reader announcement function
    function announceToScreenReader(message) {
        const statusElement = document.getElementById('form-status');
        if (statusElement) {
            statusElement.textContent = message;
            // Clear after announcement
            setTimeout(() => {
                statusElement.textContent = '';
            }, 1000);
        }
    }

    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let hasErrors = false;
        let errorCount = 0;
        
        // Validate all fields
        Object.keys(fields).forEach(fieldName => {
            if (fields[fieldName]) {
                const errors = validateField(fieldName, fields[fieldName].value);
                showError(fieldName, errors);
                if (errors.length > 0) {
                    hasErrors = true;
                    errorCount++;
                }
            }
        });

        if (hasErrors) {
            // Announce validation summary to screen readers
            announceToScreenReader(`Form has ${errorCount} error${errorCount !== 1 ? 's' : ''}. Please review and correct the highlighted fields.`);
            
            // Focus first field with error
            const firstErrorField = Object.keys(fields).find(fieldName => {
                const field = fields[fieldName];
                return field && field.classList.contains('error');
            });
            
            if (firstErrorField && fields[firstErrorField]) {
                fields[firstErrorField].focus();
            }
        } else {
            announceToScreenReader('Form submitted successfully. Redirecting to thank you page.');
            // Small delay to allow screen reader to announce success
            setTimeout(() => {
                window.location.href = 'thankyou.html';
            }, 500);
        }
    });
});