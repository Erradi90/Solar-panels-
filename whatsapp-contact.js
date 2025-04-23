/**
 * وظائف التواصل عبر الواتساب
 * هذا الملف يحتوي على الوظائف اللازمة لتسهيل التواصل عبر الواتساب
 */

// تهيئة المتغيرات العامة
const DEFAULT_WHATSAPP_NUMBER = '1234567890'; // استبدل برقم الواتساب الخاص بك
const DEFAULT_WHATSAPP_MESSAGE = 'مرحباً، أود الاستفسار عن خدمات رعاية الأطفال.'; // رسالة افتراضية

/**
 * دالة لإنشاء رابط واتساب
 * @param {string} phoneNumber - رقم الهاتف بدون رمز البلد
 * @param {string} message - الرسالة المراد إرسالها
 * @param {string} countryCode - رمز البلد (افتراضي: 966 للسعودية)
 * @returns {string} - رابط واتساب كامل
 */
function createWhatsAppLink(phoneNumber = DEFAULT_WHATSAPP_NUMBER, message = DEFAULT_WHATSAPP_MESSAGE, countryCode = '966') {
    // إزالة أي أحرف غير رقمية من رقم الهاتف
    const cleanPhoneNumber = phoneNumber.replace(/\D/g, '');
    
    // إزالة الصفر الأول إذا وجد
    const formattedNumber = cleanPhoneNumber.startsWith('0') 
        ? cleanPhoneNumber.substring(1) 
        : cleanPhoneNumber;
    
    // إنشاء رقم الهاتف الكامل مع رمز البلد
    const fullPhoneNumber = countryCode + formattedNumber;
    
    // ترميز الرسالة لاستخدامها في الرابط
    const encodedMessage = encodeURIComponent(message);
    
    // إنشاء رابط واتساب
    return `https://wa.me/${fullPhoneNumber}?text=${encodedMessage}`;
}

/**
 * دالة لتهيئة أزرار التواصل عبر الواتساب
 */
function initWhatsAppButtons() {
    document.addEventListener('DOMContentLoaded', () => {
        // البحث عن جميع روابط الواتساب
        const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
        
        // تحديث روابط الواتساب الموجودة
        whatsappLinks.forEach(link => {
            // الحصول على رقم الهاتف من السمة data-phone إذا وجدت
            const phoneNumber = link.getAttribute('data-phone') || DEFAULT_WHATSAPP_NUMBER;
            
            // الحصول على الرسالة من السمة data-message إذا وجدت
            const message = link.getAttribute('data-message') || DEFAULT_WHATSAPP_MESSAGE;
            
            // الحصول على رمز البلد من السمة data-country-code إذا وجدت
            const countryCode = link.getAttribute('data-country-code') || '966';
            
            // تحديث الرابط
            link.href = createWhatsAppLink(phoneNumber, message, countryCode);
            
            // إضافة سمة target="_blank" لفتح الرابط في نافذة جديدة
            link.setAttribute('target', '_blank');
            
            // إضافة سمة rel="noopener noreferrer" لأسباب أمنية
            link.setAttribute('rel', 'noopener noreferrer');
        });
        
        // إضافة زر واتساب عائم
        addFloatingWhatsAppButton();
    });
}

/**
 * دالة لإضافة زر واتساب عائم
 */
function addFloatingWhatsAppButton() {
    // إنشاء عنصر الزر
    const floatingButton = document.createElement('div');
    floatingButton.className = 'fixed bottom-6 left-6 z-50';
    floatingButton.innerHTML = `
        <a href="${createWhatsAppLink()}" target="_blank" rel="noopener noreferrer"
           class="flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors">
            <svg class="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
        </a>
        <span class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">1</span>
    `;
    
    // إضافة الزر إلى المستند
    document.body.appendChild(floatingButton);
}

/**
 * دالة لإضافة نموذج طلب المساعدة عبر الواتساب
 */
function addWhatsAppHelpForm() {
    document.addEventListener('DOMContentLoaded', () => {
        // البحث عن قسم طلب المساعدة
        const helpSection = document.getElementById('help');
        
        if (helpSection) {
            // إنشاء عنصر النموذج
            const whatsappFormContainer = document.createElement('div');
            whatsappFormContainer.className = 'max-w-2xl mx-auto mt-12 bg-green-50 rounded-lg shadow-md p-8 border border-green-200';
            whatsappFormContainer.innerHTML = `
                <h3 class="text-2xl font-bold text-green-800 mb-4">تواصل معنا مباشرة عبر الواتساب</h3>
                <p class="text-green-700 mb-6">يمكنك التواصل معنا مباشرة عبر الواتساب للحصول على مساعدة فورية</p>
                
                <form id="whatsappForm" class="space-y-6">
                    <div>
                        <label for="whatsappName" class="block text-sm font-medium text-gray-700 mb-1">الاسم</label>
                        <input type="text" id="whatsappName" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500">
                    </div>
                    
                    <div>
                        <label for="whatsappMessage" class="block text-sm font-medium text-gray-700 mb-1">الرسالة</label>
                        <textarea id="whatsappMessage" rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500">${DEFAULT_WHATSAPP_MESSAGE}</textarea>
                    </div>
                    
                    <button type="submit" id="sendWhatsappBtn" class="w-full flex items-center justify-center px-6 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors">
                        <svg class="h-5 w-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                        </svg>
                        إرسال عبر الواتساب
                    </button>
                </form>
            `;
            
            // إضافة النموذج إلى قسم طلب المساعدة
            helpSection.querySelector('.container').appendChild(whatsappFormContainer);
            
            // إضافة مستمع أحداث لنموذج الواتساب
            const whatsappForm = document.getElementById('whatsappForm');
            if (whatsappForm) {
                whatsappForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    
                    // الحصول على قيم الحقول
                    const name = document.getElementById('whatsappName').value.trim();
                    const message = document.getElementById('whatsappMessage').value.trim();
                    
                    // إنشاء الرسالة الكاملة
                    let fullMessage = message;
                    if (name) {
                        fullMessage = `مرحباً، أنا ${name}. ${message}`;
                    }
                    
                    // إنشاء رابط الواتساب
                    const whatsappLink = createWhatsAppLink(DEFAULT_WHATSAPP_NUMBER, fullMessage);
                    
                    // فتح رابط الواتساب في نافذة جديدة
                    window.open(whatsappLink, '_blank');
                });
            }
        }
    });
}

/**
 * دالة لإضافة خيار الاتصال الهاتفي
 */
function addPhoneCallOption() {
    document.addEventListener('DOMContentLoaded', () => {
        // البحث عن قسم طلب المساعدة
        const helpSection = document.getElementById('help');
        
        if (helpSection) {
            // إنشاء عنصر خيار الاتصال
            const phoneCallContainer = document.createElement('div');
            phoneCallContainer.className = 'max-w-2xl mx-auto mt-8 bg-blue-50 rounded-lg shadow-md p-6 border border-blue-200';
            phoneCallContainer.innerHTML = `
                <div class="flex items-center justify-between">
                    <div>
                        <h3 class="text-xl font-bold text-blue-800 mb-2">تفضل الاتصال المباشر؟</h3>
                        <p class="text-blue-700">يمكنك الاتصال بنا مباشرة على الرقم التالي</p>
                    </div>
                    <a href="tel:+9661234567890" class="flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors">
                        <svg class="h-5 w-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        اتصل الآن
                    </a>
                </div>
            `;
            
            // إضافة خيار الاتصال إلى قسم طلب المساعدة
            helpSection.querySelector('.container').appendChild(phoneCallContainer);
        }
    });
}

// تصدير الدوال للاستخدام الخارجي
window.whatsappAPI = {
    createWhatsAppLink,
    initWhatsAppButtons,
    addFloatingWhatsAppButton,
    addWhatsAppHelpForm,
    addPhoneCallOption
};

// تهيئة أزرار التواصل عبر الواتساب
initWhatsAppButtons();

// إضافة نموذج طلب المساعدة عبر الواتساب
addWhatsAppHelpForm();

// إضافة خيار الاتصال الهاتفي
addPhoneCallOption();
