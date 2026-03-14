
document.addEventListener('DOMContentLoaded', () => {
    // Mapping of form IDs to their success messages and redirect targets
    const formConfig = {
        'login-form': {
            message: 'Login successfully!',
            redirect: 'admin-dashboard.html'
        },
        'patient-login-form': {
            message: 'Login successfully!',
            redirect: 'patient-dashboard.html'
        },
        'add-doctor-form': {
            message: 'Doctor added successfully!',
            redirect: 'doctors.html'
        },
        'add-patient-form': {
            message: 'Patient registered successfully!',
            redirect: 'patients.html'
        },
        'upload-form': {
            message: 'Report uploaded successfully! Starting AI analysis...',
            redirect: '../Patient/analysis.html'
        },
        'patient-upload-form': {
            message: 'Report uploaded successfully! Starting AI analysis...',
            redirect: 'analysis.html'
        }
    };

    // Generic form submission handler
    Object.keys(formConfig).forEach(formId => {
        const form = document.getElementById(formId);
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                const config = formConfig[formId];
                alert(config.message);
                if (config.redirect) {
                    window.location.href = config.redirect;
                }
            });
        }
    });

    // Special handling for file uploads if needed
    const fileUpload = document.getElementById('file-upload');
    if (fileUpload) {
        fileUpload.addEventListener('change', function() {
            // Logic for auto-submit or preview could go here
            console.log('File selected:', this.files[0]?.name);
        });
    }
});
