/* ============================================
   Blu Manor — Application Form Handler
   Submits intake form data to Google Sheets
   via Google Apps Script Web App
   ============================================ */

(function () {
  'use strict';

  // ====================================================
  // CONFIGURATION — Replace with your deployed Apps Script URL
  // ====================================================
  var SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzKzk0gbRhRKQOVdpxNV7dIBh91gBiHbWY305KloUGhRWNniPEqeyFj7lT9rOaag3AW/exec';

  // Auto-fill signature date
  var sigDate = document.getElementById('signatureDate');
  if (sigDate) {
    sigDate.value = new Date().toISOString().split('T')[0];
  }

  // Phone number auto-formatting
  var phoneField = document.querySelector('[name="phone"]');
  if (phoneField) {
    phoneField.addEventListener('input', function () {
      var digits = this.value.replace(/\D/g, '').slice(0, 10);
      if (digits.length >= 7) {
        this.value = '(' + digits.slice(0, 3) + ') ' + digits.slice(3, 6) + '-' + digits.slice(6);
      } else if (digits.length >= 4) {
        this.value = '(' + digits.slice(0, 3) + ') ' + digits.slice(3);
      } else if (digits.length > 0) {
        this.value = '(' + digits;
      }
    });
  }

  // Clear field errors on input
  document.querySelectorAll('.form-control').forEach(function (field) {
    field.addEventListener('input', function () {
      this.classList.remove('error');
    });
  });

  // Clear radio error when selection made
  document.querySelectorAll('[name="supervision"]').forEach(function (radio) {
    radio.addEventListener('change', function () {
      document.getElementById('supervisionError').style.display = 'none';
    });
  });

  // Clear checkbox highlight on change
  var ackCheckbox = document.getElementById('ackRules');
  if (ackCheckbox) {
    ackCheckbox.addEventListener('change', function () {
      var wrapper = this.closest('.form-check');
      if (this.checked) {
        wrapper.style.outline = 'none';
        wrapper.style.padding = '0';
      }
    });
  }

  // Form submission
  var form = document.getElementById('applicationForm');
  if (!form) return;

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    // --- Validation ---
    var valid = true;

    // Required text/date fields
    form.querySelectorAll('[required]').forEach(function (field) {
      if (field.type === 'radio' || field.type === 'checkbox') return;
      if (!field.value.trim()) {
        field.classList.add('error');
        valid = false;
      } else {
        field.classList.remove('error');
      }
    });

    // Email format (optional field, but validate if filled)
    var email = form.querySelector('[name="email"]');
    if (email && email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      email.classList.add('error');
      valid = false;
    }

    // Supervision status (radio group)
    var supervisionSelected = form.querySelector('[name="supervision"]:checked');
    if (!supervisionSelected) {
      document.getElementById('supervisionError').style.display = 'block';
      valid = false;
    }

    // House rules checkbox
    var ackRulesEl = document.getElementById('ackRules');
    if (!ackRulesEl.checked) {
      var wrapper = ackRulesEl.closest('.form-check');
      wrapper.style.outline = '2px solid var(--error)';
      wrapper.style.borderRadius = '6px';
      wrapper.style.padding = '4px 8px';
      valid = false;
    }

    // Signature
    var signature = form.querySelector('[name="signature"]');
    if (!signature.value.trim()) {
      signature.classList.add('error');
      valid = false;
    }

    // Scroll to first error
    if (!valid) {
      var firstError = form.querySelector('.form-control.error, #supervisionError[style*="block"]');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    // --- Collect form data ---
    var formData = new FormData(form);
    var data = {
      formType: 'application',
      timestamp: new Date().toISOString(),
      fullName: formData.get('fullName') || '',
      dob: formData.get('dob') || '',
      phone: formData.get('phone') || '',
      email: formData.get('email') || '',
      currentAddress: formData.get('currentAddress') || '',
      supervision: formData.get('supervision') || '',
      referringAgency: formData.get('referringAgency') || '',
      officerContact: formData.get('officerContact') || '',
      employer: formData.get('employer') || '',
      position: formData.get('position') || '',
      monthlyIncome: formData.get('monthlyIncome') || '',
      workSchedule: formData.get('workSchedule') || '',
      moveInDate: formData.get('moveInDate') || '',
      emergencyContact: formData.get('emergencyContact') || '',
      ackRules: ackRulesEl.checked ? 'Yes' : 'No',
      signature: formData.get('signature') || '',
      signatureDate: formData.get('signatureDate') || ''
    };

    // --- Submit ---
    var btn = form.querySelector('button[type="submit"]');
    var originalText = btn.innerHTML;
    btn.innerHTML = '<span class="spinner"></span> Submitting...';
    btn.classList.add('loading');

    try {
      if (SCRIPT_URL === 'YOUR_GOOGLE_APPS_SCRIPT_URL') {
        // Demo mode — simulate submission delay
        await new Promise(function (resolve) { setTimeout(resolve, 1500); });
      } else {
        // Production — submit to Google Sheets
        await fetch(SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
      }

      // Show success
      form.style.display = 'none';
      document.getElementById('formSuccess').classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });

    } catch (err) {
      // Show error
      btn.innerHTML = originalText;
      btn.classList.remove('loading');
      form.style.display = 'none';
      document.getElementById('formError').classList.add('active');
    }
  });

})();
