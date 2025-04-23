/**
 * وظائف زر التبرع
 * هذا الملف يحتوي على الوظائف اللازمة لتشغيل زر التبرع والنافذة المنبثقة
 */

// تهيئة المتغيرات العامة
let selectedAmount = null;
let customAmount = null;

/**
 * دالة لتهيئة وظائف زر التبرع
 */
function initDonationButton() {
    document.addEventListener('DOMContentLoaded', () => {
        // الحصول على العناصر
        const donateBtn = document.getElementById('donateBtn');
        const mobileDonateBtn = document.getElementById('mobileDonateBtn');
        const donationModal = document.getElementById('donationModal');
        const closeModal = document.getElementById('closeModal');
        const donationAmounts = document.querySelectorAll('.donation-amount');
        const customAmountContainer = document.getElementById('customAmountContainer');
        const customAmountInput = document.getElementById('customAmount');
        const proceedDonation = document.getElementById('proceedDonation');
        
        // فتح النافذة المنبثقة عند النقر على زر التبرع
        if (donateBtn) {
            donateBtn.addEventListener('click', () => {
                donationModal.classList.remove('hidden');
                resetDonationForm();
            });
        }
        
        // فتح النافذة المنبثقة عند النقر على زر التبرع في القائمة المتنقلة
        if (mobileDonateBtn) {
            mobileDonateBtn.addEventListener('click', () => {
                donationModal.classList.remove('hidden');
                resetDonationForm();
            });
        }
        
        // إغلاق النافذة المنبثقة عند النقر على زر الإغلاق
        if (closeModal) {
            closeModal.addEventListener('click', () => {
                donationModal.classList.add('hidden');
            });
            
            // إغلاق النافذة المنبثقة عند النقر خارجها
            donationModal.addEventListener('click', (e) => {
                if (e.target === donationModal) {
                    donationModal.classList.add('hidden');
                }
            });
        }
        
        // تحديد مبلغ التبرع عند النقر على أحد الأزرار
        donationAmounts.forEach(button => {
            button.addEventListener('click', () => {
                // إزالة الفئة النشطة من جميع الأزرار
                donationAmounts.forEach(btn => {
                    btn.classList.remove('bg-indigo-100', 'border-indigo-500');
                });
                
                // إضافة الفئة النشطة إلى الزر المنقور
                button.classList.add('bg-indigo-100', 'border-indigo-500');
                
                // تحديد المبلغ المختار
                const amountText = button.textContent.trim();
                
                if (amountText === 'مبلغ آخر') {
                    // إظهار حقل المبلغ المخصص
                    customAmountContainer.classList.remove('hidden');
                    selectedAmount = null;
                    customAmount = null;
                    
                    // التركيز على حقل المبلغ المخصص
                    if (customAmountInput) {
                        customAmountInput.focus();
                    }
                } else {
                    // إخفاء حقل المبلغ المخصص
                    customAmountContainer.classList.add('hidden');
                    
                    // استخراج المبلغ من النص (مثلاً: "10 دولار" -> 10)
                    selectedAmount = parseInt(amountText.match(/\d+/)[0]);
                    customAmount = null;
                }
            });
        });
        
        // تحديث المبلغ المخصص عند تغيير قيمة الحقل
        if (customAmountInput) {
            customAmountInput.addEventListener('input', () => {
                customAmount = parseFloat(customAmountInput.value);
            });
        }
        
        // معالجة النقر على زر "متابعة التبرع"
        if (proceedDonation) {
            proceedDonation.addEventListener('click', () => {
                // التحقق من اختيار مبلغ
                const amount = customAmount !== null ? customAmount : selectedAmount;
                
                if (amount === null || isNaN(amount) || amount <= 0) {
                    // عرض رسالة خطأ إذا لم يتم اختيار مبلغ صحيح
                    alert('الرجاء اختيار مبلغ صحيح للتبرع');
                    return;
                }
                
                // في التطبيق الحقيقي، هنا سيتم توجيه المستخدم إلى صفحة الدفع
                // لأغراض العرض، سنعرض رسالة تأكيد فقط
                alert(`شكراً لتبرعك بمبلغ ${amount} دولار! سيتم توجيهك إلى صفحة الدفع.`);
                
                // إغلاق النافذة المنبثقة
                donationModal.classList.add('hidden');
            });
        }
    });
}

/**
 * دالة لإعادة تعيين نموذج التبرع
 */
function resetDonationForm() {
    // إعادة تعيين المتغيرات
    selectedAmount = null;
    customAmount = null;
    
    // إزالة الفئة النشطة من جميع أزرار المبالغ
    const donationAmounts = document.querySelectorAll('.donation-amount');
    donationAmounts.forEach(btn => {
        btn.classList.remove('bg-indigo-100', 'border-indigo-500');
    });
    
    // إخفاء حقل المبلغ المخصص
    const customAmountContainer = document.getElementById('customAmountContainer');
    if (customAmountContainer) {
        customAmountContainer.classList.add('hidden');
    }
    
    // إعادة تعيين قيمة حقل المبلغ المخصص
    const customAmountInput = document.getElementById('customAmount');
    if (customAmountInput) {
        customAmountInput.value = '';
    }
}

/**
 * دالة لمعالجة عملية الدفع
 * في التطبيق الحقيقي، هذه الدالة ستتعامل مع بوابة الدفع
 * @param {number} amount - مبلغ التبرع
 */
function processDonation(amount) {
    // هذه الدالة ستكون مسؤولة عن التعامل مع بوابة الدفع
    // يمكن استخدام PayPal أو Stripe أو أي بوابة دفع أخرى
    
    console.log(`معالجة التبرع بمبلغ ${amount} دولار`);
    
    // في التطبيق الحقيقي، هنا سيتم توجيه المستخدم إلى صفحة الدفع
    // لأغراض العرض، سنعرض رسالة تأكيد فقط
    return {
        success: true,
        message: `تم استلام تبرعك بمبلغ ${amount} دولار بنجاح! شكراً لدعمك.`
    };
}

// تصدير الدوال للاستخدام الخارجي
window.donationAPI = {
    initDonationButton,
    resetDonationForm,
    processDonation
};

// تهيئة زر التبرع
initDonationButton();
