/**
 * تكامل Google Sheets لطلبات المساعدة
 * هذا الملف يحتوي على الوظائف اللازمة لإرسال طلبات المساعدة إلى Google Sheets
 */

// تهيئة المتغيرات العامة
const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_WEB_APP_URL'; // استبدل برابط تطبيق الويب الخاص بـ Google Apps Script

/**
 * دالة لإرسال بيانات النموذج إلى Google Sheets
 * @param {Object} formData - كائن يحتوي على بيانات النموذج
 * @returns {Promise} - وعد يحتوي على نتيجة الإرسال
 */
async function submitToGoogleSheets(formData) {
    try {
        console.log('جاري إرسال البيانات إلى Google Sheets:', formData);
        
        // في التطبيق الحقيقي، سنقوم بإرسال البيانات إلى Google Sheets
        // لأغراض العرض، سنقوم بمحاكاة عملية الإرسال
        
        // محاكاة طلب الشبكة
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('تم إرسال البيانات بنجاح!');
                resolve({ success: true, message: 'تم استلام طلبك بنجاح!' });
            }, 1000);
        });
    } catch (error) {
        console.error('خطأ في إرسال البيانات إلى Google Sheets:', error);
        throw new Error('فشل في إرسال البيانات إلى Google Sheets');
    }
}

/**
 * دالة للتحقق من صحة بيانات النموذج
 * @param {Object} formData - كائن يحتوي على بيانات النموذج
 * @returns {Object} - كائن يحتوي على نتيجة التحقق
 */
function validateFormData(formData) {
    const errors = {};
    
    // التحقق من الاسم
    if (!formData.name || formData.name.trim() === '') {
        errors.name = 'الرجاء إدخال الاسم الكامل';
    }
    
    // التحقق من البريد الإلكتروني
    if (!formData.email || formData.email.trim() === '') {
        errors.email = 'الرجاء إدخال البريد الإلكتروني';
    } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            errors.email = 'الرجاء إدخال بريد إلكتروني صحيح';
        }
    }
    
    // التحقق من رقم الهاتف
    if (!formData.phone || formData.phone.trim() === '') {
        errors.phone = 'الرجاء إدخال رقم الهاتف';
    }
    
    // التحقق من الرسالة
    if (!formData.message || formData.message.trim() === '') {
        errors.message = 'الرجاء إدخال رسالتك';
    }
    
    return {
        isValid: Object.keys(errors).length === 0,
        errors
    };
}

/**
 * دالة لعرض رسائل الخطأ في النموذج
 * @param {Object} errors - كائن يحتوي على رسائل الخطأ
 */
function displayFormErrors(errors) {
    // إزالة جميع رسائل الخطأ السابقة
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(element => element.remove());
    
    // عرض رسائل الخطأ الجديدة
    Object.keys(errors).forEach(fieldName => {
        const field = document.getElementById(fieldName);
        if (field) {
            // إضافة فئة الخطأ إلى الحقل
            field.classList.add('border-red-500');
            
            // إنشاء عنصر لرسالة الخطأ
            const errorElement = document.createElement('p');
            errorElement.className = 'error-message text-red-500 text-sm mt-1';
            errorElement.textContent = errors[fieldName];
            
            // إضافة رسالة الخطأ بعد الحقل
            field.parentNode.appendChild(errorElement);
        }
    });
}

/**
 * دالة لإزالة رسائل الخطأ وفئات الخطأ من النموذج
 */
function clearFormErrors() {
    // إزالة جميع رسائل الخطأ
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(element => element.remove());
    
    // إزالة فئات الخطأ من الحقول
    const formFields = document.querySelectorAll('#helpForm input, #helpForm textarea');
    formFields.forEach(field => {
        field.classList.remove('border-red-500');
    });
}

/**
 * دالة لعرض رسالة النجاح بعد إرسال النموذج
 * @param {string} message - نص رسالة النجاح
 */
function displaySuccessMessage(message) {
    // إنشاء عنصر لرسالة النجاح
    const successElement = document.createElement('div');
    successElement.className = 'bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4';
    successElement.setAttribute('role', 'alert');
    successElement.innerHTML = `
        <strong class="font-bold">تم بنجاح!</strong>
        <span class="block sm:inline"> ${message}</span>
    `;
    
    // إضافة رسالة النجاح في بداية النموذج
    const form = document.getElementById('helpForm');
    form.prepend(successElement);
    
    // إخفاء رسالة النجاح بعد 5 ثوانٍ
    setTimeout(() => {
        successElement.remove();
    }, 5000);
}

/**
 * دالة لإعادة تعيين النموذج
 */
function resetForm() {
    const form = document.getElementById('helpForm');
    if (form) {
        form.reset();
        clearFormErrors();
    }
}

/**
 * دالة لتهيئة نموذج طلب المساعدة
 */
function initHelpForm() {
    document.addEventListener('DOMContentLoaded', () => {
        const helpForm = document.getElementById('helpForm');
        
        if (helpForm) {
            helpForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                
                // جمع بيانات النموذج
                const formData = {
                    name: document.getElementById('name').value,
                    email: document.getElementById('email').value,
                    phone: document.getElementById('phone').value,
                    message: document.getElementById('message').value,
                    timestamp: new Date().toISOString()
                };
                
                // التحقق من صحة البيانات
                const validation = validateFormData(formData);
                
                if (!validation.isValid) {
                    // عرض رسائل الخطأ
                    displayFormErrors(validation.errors);
                    return;
                }
                
                // إزالة رسائل الخطأ
                clearFormErrors();
                
                try {
                    // إظهار مؤشر التحميل
                    const submitButton = helpForm.querySelector('button[type="submit"]');
                    const originalButtonText = submitButton.innerHTML;
                    submitButton.disabled = true;
                    submitButton.innerHTML = `
                        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        جاري الإرسال...
                    `;
                    
                    // إرسال البيانات إلى Google Sheets
                    const result = await submitToGoogleSheets(formData);
                    
                    // إعادة تعيين النموذج وعرض رسالة النجاح
                    resetForm();
                    displaySuccessMessage(result.message || 'تم استلام طلبك بنجاح! سنتواصل معك قريباً.');
                    
                    // إعادة تعيين زر الإرسال
                    submitButton.disabled = false;
                    submitButton.innerHTML = originalButtonText;
                } catch (error) {
                    console.error('خطأ في إرسال النموذج:', error);
                    
                    // عرض رسالة الخطأ
                    const errorElement = document.createElement('div');
                    errorElement.className = 'bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4';
                    errorElement.setAttribute('role', 'alert');
                    errorElement.innerHTML = `
                        <strong class="font-bold">خطأ!</strong>
                        <span class="block sm:inline"> حدث خطأ أثناء إرسال النموذج. يرجى المحاولة مرة أخرى.</span>
                    `;
                    
                    // إضافة رسالة الخطأ في بداية النموذج
                    helpForm.prepend(errorElement);
                    
                    // إخفاء رسالة الخطأ بعد 5 ثوانٍ
                    setTimeout(() => {
                        errorElement.remove();
                    }, 5000);
                    
                    // إعادة تعيين زر الإرسال
                    const submitButton = helpForm.querySelector('button[type="submit"]');
                    submitButton.disabled = false;
                    submitButton.innerHTML = 'إرسال الطلب';
                }
            });
            
            // إضافة مستمعي الأحداث لإزالة رسائل الخطأ عند الكتابة
            const formFields = document.querySelectorAll('#helpForm input, #helpForm textarea');
            formFields.forEach(field => {
                field.addEventListener('input', () => {
                    field.classList.remove('border-red-500');
                    const errorElement = field.parentNode.querySelector('.error-message');
                    if (errorElement) {
                        errorElement.remove();
                    }
                });
            });
        }
    });
}

/**
 * دالة لإنشاء Google Apps Script لاستلام البيانات وإضافتها إلى Google Sheets
 * يجب نسخ هذا الكود إلى Google Apps Script وتعديله حسب الحاجة
 */
function createGoogleAppsScript() {
    // هذه الدالة لا تُنفذ في المتصفح، بل هي للتوثيق فقط
    
    /*
    // كود Google Apps Script
    
    // دالة لمعالجة الطلبات الواردة
    function doPost(e) {
      try {
        // تحليل البيانات الواردة
        const data = JSON.parse(e.postData.contents);
        
        // الوصول إلى جدول البيانات
        const spreadsheetId = 'YOUR_SPREADSHEET_ID'; // استبدل بمعرف جدول البيانات الخاص بك
        const sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName('طلبات المساعدة');
        
        // إضافة البيانات إلى جدول البيانات
        sheet.appendRow([
          new Date(), // تاريخ الاستلام
          data.name,
          data.email,
          data.phone,
          data.message,
          data.timestamp
        ]);
        
        // إرسال رد بنجاح العملية
        return ContentService.createTextOutput(JSON.stringify({
          success: true,
          message: 'تم استلام طلبك بنجاح!'
        })).setMimeType(ContentService.MimeType.JSON);
        
      } catch (error) {
        // إرسال رد بفشل العملية
        return ContentService.createTextOutput(JSON.stringify({
          success: false,
          message: 'حدث خطأ أثناء معالجة طلبك: ' + error.message
        })).setMimeType(ContentService.MimeType.JSON);
      }
    }
    
    // دالة للسماح بطلبات CORS
    function doOptions(e) {
      var headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '86400'
      };
      
      return ContentService.createTextOutput().setMimeType(ContentService.MimeType.JSON)
        .setHeaders(headers);
    }
    */
}

// تصدير الدوال للاستخدام الخارجي
window.sheetsAPI = {
    submitToGoogleSheets,
    validateFormData,
    displayFormErrors,
    clearFormErrors,
    displaySuccessMessage,
    resetForm,
    initHelpForm
};

// تهيئة نموذج طلب المساعدة
initHelpForm();
