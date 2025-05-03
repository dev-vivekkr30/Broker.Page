// Sidebar Toggle
document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', function () {
        document.querySelectorAll('.toggle-btn').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        const targetStep = this.getAttribute('data-step');
        document.querySelectorAll('.step').forEach(step => step.classList.remove('active'));
        document.getElementById(`step-${targetStep}`).classList.add('active');
    });
});

// Same Number Checkbox
$(document).ready(function () {
    $('#sameNumber').change(function () {
        if (this.checked) {
            $('#whatsapp').val($('#mobile').val());
        }
    });

    // Initialize Select2
    $('.select2').select2({
        maximumSelectionLength: 30,
        placeholder: 'Select colonies',
        tags: true,
        width: '100%'
    });
});

// Add dynamic fields
function addField(type, max, isTextArea = false) {
    const container = document.getElementById(`${type}Container`);
    if (container.children.length >= max) return;

    const wrapper = document.createElement('div');
    wrapper.className = 'd-flex align-items-center mb-2';

    const input = document.createElement(isTextArea ? 'textarea' : 'input');
    input.className = 'form-control';
    if (isTextArea) input.rows = 2;
    if (type === 'listings') input.maxLength = 200;

    const btn = document.createElement('span');
    btn.innerHTML = '<i class="bi bi-x-circle"></i>';
    btn.className = 'btn-delete ms-2';
    btn.onclick = () => wrapper.remove();

    wrapper.appendChild(input);
    wrapper.appendChild(btn);
    container.appendChild(wrapper);
}