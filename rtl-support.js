/**
 * دعم اللغة العربية والاتجاه من اليمين إلى اليسار
 * هذا الملف يحتوي على الوظائف والأنماط اللازمة لدعم اللغة العربية والاتجاه من اليمين إلى اليسار
 */

// تهيئة المتغيرات العامة
const RTL_CLASS = 'rtl';
const RTL_ATTRIBUTE = 'dir';
const RTL_VALUE = 'rtl';
const LTR_VALUE = 'ltr';

/**
 * دالة لتطبيق الاتجاه من اليمين إلى اليسار على العناصر
 */
function applyRTLStyles() {
    document.addEventListener('DOMContentLoaded', () => {
        // التأكد من أن عنصر HTML يحتوي على سمة dir="rtl"
        const htmlElement = document.documentElement;
        if (htmlElement.getAttribute(RTL_ATTRIBUTE) !== RTL_VALUE) {
            htmlElement.setAttribute(RTL_ATTRIBUTE, RTL_VALUE);
        }
        
        // التأكد من أن عنصر HTML يحتوي على سمة lang="ar"
        if (htmlElement.getAttribute('lang') !== 'ar') {
            htmlElement.setAttribute('lang', 'ar');
        }
        
        // إضافة فئة RTL إلى عنصر body
        document.body.classList.add(RTL_CLASS);
        
        // تعديل أنماط CSS للعناصر التي تحتاج إلى تعديل خاص
        applyRTLSpecificStyles();
    });
}

/**
 * دالة لتطبيق أنماط CSS خاصة بالاتجاه من اليمين إلى اليسار
 */
function applyRTLSpecificStyles() {
    // إنشاء عنصر style
    const styleElement = document.createElement('style');
    styleElement.type = 'text/css';
    
    // تحديد الأنماط الخاصة بالاتجاه من اليمين إلى اليسار
    const rtlStyles = `
        /* تعديل هوامش العناصر */
        .rtl .mr-1 { margin-right: 0 !important; margin-left: 0.25rem !important; }
        .rtl .mr-2 { margin-right: 0 !important; margin-left: 0.5rem !important; }
        .rtl .mr-3 { margin-right: 0 !important; margin-left: 0.75rem !important; }
        .rtl .mr-4 { margin-right: 0 !important; margin-left: 1rem !important; }
        .rtl .ml-1 { margin-left: 0 !important; margin-right: 0.25rem !important; }
        .rtl .ml-2 { margin-left: 0 !important; margin-right: 0.5rem !important; }
        .rtl .ml-3 { margin-left: 0 !important; margin-right: 0.75rem !important; }
        .rtl .ml-4 { margin-left: 0 !important; margin-right: 1rem !important; }
        
        /* تعديل حشوات العناصر */
        .rtl .pr-1 { padding-right: 0 !important; padding-left: 0.25rem !important; }
        .rtl .pr-2 { padding-right: 0 !important; padding-left: 0.5rem !important; }
        .rtl .pr-3 { padding-right: 0 !important; padding-left: 0.75rem !important; }
        .rtl .pr-4 { padding-right: 0 !important; padding-left: 1rem !important; }
        .rtl .pl-1 { padding-left: 0 !important; padding-right: 0.25rem !important; }
        .rtl .pl-2 { padding-left: 0 !important; padding-right: 0.5rem !important; }
        .rtl .pl-3 { padding-left: 0 !important; padding-right: 0.75rem !important; }
        .rtl .pl-4 { padding-left: 0 !important; padding-right: 1rem !important; }
        
        /* تعديل محاذاة النص */
        .rtl .text-left { text-align: right !important; }
        .rtl .text-right { text-align: left !important; }
        
        /* تعديل حدود العناصر */
        .rtl .border-l { border-left: none !important; border-right: 1px solid !important; }
        .rtl .border-r { border-right: none !important; border-left: 1px solid !important; }
        
        /* تعديل موضع العناصر المطلقة */
        .rtl .left-0 { left: auto !important; right: 0 !important; }
        .rtl .right-0 { right: auto !important; left: 0 !important; }
        
        /* تعديل اتجاه المرنة */
        .rtl .flex-row { flex-direction: row-reverse !important; }
        .rtl .space-x-1 > * + * { margin-left: 0 !important; margin-right: 0.25rem !important; }
        .rtl .space-x-2 > * + * { margin-left: 0 !important; margin-right: 0.5rem !important; }
        .rtl .space-x-3 > * + * { margin-left: 0 !important; margin-right: 0.75rem !important; }
        .rtl .space-x-4 > * + * { margin-left: 0 !important; margin-right: 1rem !important; }
        
        /* تعديل أيقونات الأسهم */
        .rtl .rtl\\:rotate-180 { transform: rotate(180deg) !important; }
        
        /* تعديل موضع القوائم المنسدلة */
        .rtl #userMenu { left: 0 !important; right: auto !important; }
        
        /* تعديل موضع أزرار الإغلاق */
        .rtl #closeModal { left: 2rem !important; right: auto !important; }
        
        /* تعديل حقول البحث */
        .rtl #blogSearch { padding-right: 1rem !important; padding-left: 2.5rem !important; }
        .rtl #searchBtn { left: 0.5rem !important; right: auto !important; }
    `;
    
    // إضافة الأنماط إلى عنصر style
    styleElement.appendChild(document.createTextNode(rtlStyles));
    
    // إضافة عنصر style إلى رأس المستند
    document.head.appendChild(styleElement);
}

/**
 * دالة للتحقق من دعم الخطوط العربية
 */
function checkArabicFontsSupport() {
    // التأكد من تحميل خط Tajawal
    const tajawalFont = new FontFace('Tajawal', 'url(https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700&display=swap)');
    
    tajawalFont.load().then(() => {
        console.log('تم تحميل خط Tajawal بنجاح');
    }).catch(error => {
        console.error('فشل في تحميل خط Tajawal:', error);
        
        // في حالة فشل تحميل الخط، استخدم خط احتياطي
        const styleElement = document.createElement('style');
        styleElement.type = 'text/css';
        styleElement.appendChild(document.createTextNode(`
            body {
                font-family: 'Arial', sans-serif !important;
            }
        `));
        document.head.appendChild(styleElement);
    });
}

/**
 * دالة لتصحيح اتجاه إدخال النص في حقول النموذج
 */
function fixTextInputDirection() {
    document.addEventListener('DOMContentLoaded', () => {
        // الحصول على جميع حقول الإدخال والنصوص
        const textInputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], textarea');
        
        // إضافة مستمع أحداث لكل حقل
        textInputs.forEach(input => {
            input.addEventListener('input', () => {
                // التحقق من اللغة المستخدمة في النص
                const text = input.value;
                const direction = isArabicText(text) ? RTL_VALUE : LTR_VALUE;
                
                // تعيين اتجاه النص
                input.style.direction = direction;
            });
        });
    });
}

/**
 * دالة للتحقق مما إذا كان النص عربيًا
 * @param {string} text - النص المراد فحصه
 * @returns {boolean} - إذا كان النص يحتوي على أحرف عربية
 */
function isArabicText(text) {
    // نطاق الأحرف العربية في Unicode
    const arabicPattern = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/;
    return arabicPattern.test(text);
}

/**
 * دالة لتصحيح اتجاه عناصر SVG
 */
function fixSVGDirection() {
    document.addEventListener('DOMContentLoaded', () => {
        // الحصول على جميع عناصر SVG
        const svgElements = document.querySelectorAll('svg');
        
        // تعديل اتجاه عناصر SVG التي تحتوي على أسهم
        svgElements.forEach(svg => {
            // التحقق مما إذا كان SVG يحتوي على مسار يشبه السهم
            const paths = svg.querySelectorAll('path');
            paths.forEach(path => {
                const d = path.getAttribute('d');
                if (d && (d.includes('M21 21l-6-6m2-5') || d.includes('M15 19l-7-7 7-7'))) {
                    // تدوير السهم 180 درجة
                    svg.classList.add('rtl:rotate-180');
                }
            });
        });
    });
}

// تصدير الدوال للاستخدام الخارجي
window.rtlAPI = {
    applyRTLStyles,
    applyRTLSpecificStyles,
    checkArabicFontsSupport,
    fixTextInputDirection,
    fixSVGDirection,
    isArabicText
};

// تطبيق أنماط الاتجاه من اليمين إلى اليسار
applyRTLStyles();

// التحقق من دعم الخطوط العربية
checkArabicFontsSupport();

// تصحيح اتجاه إدخال النص في حقول النموذج
fixTextInputDirection();

// تصحيح اتجاه عناصر SVG
fixSVGDirection();
