/**
 * تكامل واجهة برمجة تطبيقات Blogger
 * هذا الملف يحتوي على الوظائف اللازمة لجلب وعرض المقالات من مدونة Blogger
 */

// تهيئة المتغيرات العامة
const BLOGGER_API_KEY = 'YOUR_API_KEY'; // استبدل بمفتاح API الخاص بك
const BLOGGER_ID = 'YOUR_BLOG_ID'; // استبدل بمعرف المدونة الخاص بك
const MAX_RESULTS = 6; // عدد المقالات التي سيتم عرضها

/**
 * دالة لجلب المقالات من واجهة برمجة تطبيقات Blogger
 * @param {number} count - عدد المقالات المطلوبة
 * @returns {Promise} - وعد يحتوي على بيانات المقالات
 */
async function fetchBlogPosts(count = MAX_RESULTS) {
    try {
        const url = `https://www.googleapis.com/blogger/v3/blogs/${BLOGGER_ID}/posts?key=${BLOGGER_API_KEY}&maxResults=${count}`;
        
        // في التطبيق الحقيقي، سنقوم بجلب البيانات من واجهة برمجة التطبيقات
        // لأغراض العرض، سنستخدم بيانات وهمية
        
        // محاكاة طلب الشبكة
        console.log(`جاري جلب ${count} مقالات من المدونة...`);
        
        // بيانات وهمية للعرض
        const placeholderPosts = [
            {
                id: '1001',
                title: 'نصائح للتعامل مع نوم الأطفال الرضع',
                published: '2025-04-15T10:30:00Z',
                content: 'يعاني الكثير من الآباء والأمهات من مشكلة نوم أطفالهم الرضع. في هذا المقال، نقدم لكم أفضل النصائح للتعامل مع هذه المشكلة وضمان نوم هادئ لطفلك. من المهم إنشاء روتين منتظم لوقت النوم يتضمن حماماً دافئاً، وقراءة قصة، وإطفاء الأضواء الساطعة. كما يُنصح بالحفاظ على درجة حرارة مناسبة في غرفة الطفل، وتجنب الضوضاء المفرطة. تذكر أن كل طفل فريد من نوعه، لذا قد تحتاج إلى تجربة أساليب مختلفة حتى تجد ما يناسب طفلك.',
                url: '#/blog/1001',
                image: 'https://img.freepik.com/free-photo/mother-putting-baby-sleep_23-2148986288.jpg?w=740&t=st=1650123456~exp=1650124056~hmac=abcdef123456',
                author: {
                    name: 'د. سارة أحمد',
                    image: 'https://api.dicebear.com/7.x/initials/svg?seed=SA'
                },
                labels: ['النوم', 'الرضع', 'نصائح']
            },
            {
                id: '1002',
                title: 'أفضل أنواع الأغذية للأطفال في السنة الأولى',
                published: '2025-04-10T14:15:00Z',
                content: 'تعتبر التغذية السليمة من أهم العوامل التي تؤثر على نمو الطفل في سنته الأولى. تعرف على أفضل أنواع الأغذية التي يمكن تقديمها للطفل خلال هذه الفترة. خلال الأشهر الستة الأولى، يعتبر حليب الأم هو الغذاء المثالي والكامل للطفل. بعد ذلك، يمكن البدء بإدخال الأطعمة الصلبة تدريجياً مثل الحبوب المدعمة بالحديد، والخضروات المهروسة، والفواكه. من المهم تقديم نوع واحد من الطعام في كل مرة لمدة 3-5 أيام لمراقبة أي ردود فعل تحسسية محتملة.',
                url: '#/blog/1002',
                image: 'https://img.freepik.com/free-photo/mother-feeding-her-baby_23-2148986290.jpg?w=740&t=st=1650123456~exp=1650124056~hmac=abcdef123456',
                author: {
                    name: 'د. محمد خالد',
                    image: 'https://api.dicebear.com/7.x/initials/svg?seed=MK'
                },
                labels: ['تغذية', 'الرضع', 'الأطعمة الصلبة']
            },
            {
                id: '1003',
                title: 'علامات النمو الطبيعي للأطفال',
                published: '2025-04-05T09:45:00Z',
                content: 'يمر الأطفال بمراحل نمو مختلفة خلال السنوات الأولى من حياتهم. في هذا المقال، نستعرض أهم علامات النمو الطبيعي التي يجب أن تنتبه لها كأب أو أم. في الشهر الأول، يبدأ الطفل برفع رأسه قليلاً عندما يكون على بطنه. بحلول الشهر الرابع، يمكنه الاستدارة من وضعية البطن إلى الظهر. في الشهر السادس، يبدأ بالجلوس بدون دعم. ومع نهاية العام الأول، يبدأ معظم الأطفال بالوقوف والمشي بمساعدة. تذكر أن هذه مجرد إرشادات عامة، وأن كل طفل ينمو بوتيرته الخاصة.',
                url: '#/blog/1003',
                image: 'https://img.freepik.com/free-photo/baby-development-concept_23-2148986295.jpg?w=740&t=st=1650123456~exp=1650124056~hmac=abcdef123456',
                author: {
                    name: 'د. ليلى عمر',
                    image: 'https://api.dicebear.com/7.x/initials/svg?seed=LO'
                },
                labels: ['النمو', 'التطور', 'المراحل']
            },
            {
                id: '1004',
                title: 'كيفية التعامل مع الحمى عند الأطفال',
                published: '2025-03-28T11:20:00Z',
                content: 'الحمى من الأعراض الشائعة عند الأطفال وغالباً ما تثير قلق الوالدين. تعرف على كيفية التعامل معها بشكل صحيح. أولاً، من المهم معرفة أن الحمى هي آلية دفاعية للجسم ضد العدوى. تعتبر درجة الحرارة مرتفعة إذا تجاوزت 38 درجة مئوية. يمكن استخدام خافضات الحرارة مثل الباراسيتامول أو الإيبوبروفين وفقاً لتعليمات الطبيب. من المهم أيضاً الحفاظ على ترطيب الطفل وعدم الإفراط في تغطيته. يجب استشارة الطبيب فوراً إذا كان عمر الطفل أقل من 3 أشهر، أو إذا استمرت الحمى لأكثر من يومين، أو إذا ظهرت أعراض أخرى مقلقة.',
                url: '#/blog/1004',
                image: 'https://img.freepik.com/free-photo/sick-child-bed_23-2148986300.jpg?w=740&t=st=1650123456~exp=1650124056~hmac=abcdef123456',
                author: {
                    name: 'د. أحمد سمير',
                    image: 'https://api.dicebear.com/7.x/initials/svg?seed=AS'
                },
                labels: ['الحمى', 'الصحة', 'الأمراض']
            },
            {
                id: '1005',
                title: 'أهمية اللعب في تطور الأطفال',
                published: '2025-03-20T15:40:00Z',
                content: 'اللعب ليس مجرد وسيلة للترفيه، بل هو أساسي لتطور الطفل الجسدي والعقلي والاجتماعي. اكتشف كيف يمكنك تعزيز نمو طفلك من خلال اللعب. يساعد اللعب الأطفال على تطوير مهاراتهم الحركية الدقيقة والكبيرة، ويعزز التفكير الإبداعي وحل المشكلات. كما أنه يساهم في تطوير المهارات اللغوية والاجتماعية. من المهم توفير مجموعة متنوعة من الألعاب المناسبة لعمر الطفل، مع الحرص على سلامتها. شارك طفلك في اللعب قدر الإمكان، فهذا يقوي العلاقة بينكما ويعزز ثقته بنفسه.',
                url: '#/blog/1005',
                image: 'https://img.freepik.com/free-photo/children-playing-with-toys_23-2148986310.jpg?w=740&t=st=1650123456~exp=1650124056~hmac=abcdef123456',
                author: {
                    name: 'د. نورا حسن',
                    image: 'https://api.dicebear.com/7.x/initials/svg?seed=NH'
                },
                labels: ['اللعب', 'التطور', 'المهارات']
            },
            {
                id: '1006',
                title: 'نصائح للتعامل مع نوبات الغضب عند الأطفال',
                published: '2025-03-15T08:30:00Z',
                content: 'نوبات الغضب جزء طبيعي من تطور الطفل، لكنها قد تكون مرهقة للوالدين. إليك بعض النصائح للتعامل معها بفعالية. أولاً، حافظ على هدوئك، فردة فعلك تؤثر على سلوك طفلك. حاول فهم سبب الغضب، فقد يكون الطفل جائعاً أو متعباً أو محبطاً. علّم طفلك كيفية التعبير عن مشاعره بالكلمات بدلاً من الصراخ أو الضرب. استخدم أسلوب التشتيت لصرف انتباه الطفل عن سبب الغضب. وأخيراً، امدح السلوك الإيجابي وتجاهل السلوك السلبي قدر الإمكان.',
                url: '#/blog/1006',
                image: 'https://img.freepik.com/free-photo/child-having-tantrum_23-2148986315.jpg?w=740&t=st=1650123456~exp=1650124056~hmac=abcdef123456',
                author: {
                    name: 'د. فاطمة علي',
                    image: 'https://api.dicebear.com/7.x/initials/svg?seed=FA'
                },
                labels: ['السلوك', 'الغضب', 'التربية']
            }
        ];
        
        return placeholderPosts.slice(0, count);
    } catch (error) {
        console.error('خطأ في جلب مقالات المدونة:', error);
        throw new Error('فشل في جلب مقالات المدونة');
    }
}

/**
 * دالة لعرض المقالات في الصفحة
 * @param {Array} posts - مصفوفة تحتوي على بيانات المقالات
 * @param {string} containerId - معرف العنصر الذي سيتم عرض المقالات فيه
 */
function displayBlogPosts(posts, containerId = 'blogPosts') {
    const blogPostsContainer = document.getElementById(containerId);
    if (!blogPostsContainer) {
        console.error(`لم يتم العثور على العنصر بالمعرف: ${containerId}`);
        return;
    }
    
    blogPostsContainer.innerHTML = '';
    
    if (!posts || posts.length === 0) {
        blogPostsContainer.innerHTML = '<p class="text-center text-gray-500 py-8">لا توجد مقالات متاحة حالياً</p>';
        return;
    }
    
    posts.forEach(post => {
        const date = new Date(post.published);
        const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        
        // إنشاء عنصر للمقال
        const postElement = document.createElement('div');
        postElement.className = 'bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105';
        
        // تحديد محتوى المقال
        postElement.innerHTML = `
            <img src="${post.image}" alt="${post.title}" class="w-full h-48 object-cover">
            <div class="p-6">
                <div class="flex items-center mb-4">
                    <img src="${post.author.image}" alt="${post.author.name}" class="w-10 h-10 rounded-full ml-3">
                    <div>
                        <h4 class="font-medium text-gray-800">${post.author.name}</h4>
                        <p class="text-xs text-gray-500">${formattedDate}</p>
                    </div>
                </div>
                <h3 class="text-xl font-bold text-gray-800 mb-2">${post.title}</h3>
                <p class="text-gray-600 mb-4">${post.content.substring(0, 150)}...</p>
                <div class="flex flex-wrap gap-2 mb-4">
                    ${post.labels.map(label => `
                        <span class="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">${label}</span>
                    `).join('')}
                </div>
                <a href="${post.url}" class="text-indigo-600 font-medium hover:text-indigo-800 inline-flex items-center">
                    اقرأ المزيد
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </a>
            </div>
        `;
        
        // إضافة المقال إلى الحاوية
        blogPostsContainer.appendChild(postElement);
    });
}

/**
 * دالة لتحميل المزيد من المقالات
 * @param {number} currentCount - العدد الحالي للمقالات المعروضة
 * @param {number} increment - عدد المقالات الإضافية المطلوبة
 */
async function loadMorePosts(currentCount, increment = 3) {
    try {
        const newCount = currentCount + increment;
        const posts = await fetchBlogPosts(newCount);
        displayBlogPosts(posts);
        return posts.length;
    } catch (error) {
        console.error('خطأ في تحميل المزيد من المقالات:', error);
        return currentCount;
    }
}

/**
 * دالة للبحث في المقالات
 * @param {string} query - نص البحث
 */
async function searchBlogPosts(query) {
    try {
        if (!query || query.trim() === '') {
            const posts = await fetchBlogPosts();
            displayBlogPosts(posts);
            return posts;
        }
        
        const allPosts = await fetchBlogPosts(20); // جلب عدد أكبر من المقالات للبحث فيها
        const normalizedQuery = query.trim().toLowerCase();
        
        const filteredPosts = allPosts.filter(post => {
            const titleMatch = post.title.toLowerCase().includes(normalizedQuery);
            const contentMatch = post.content.toLowerCase().includes(normalizedQuery);
            const labelsMatch = post.labels.some(label => label.toLowerCase().includes(normalizedQuery));
            
            return titleMatch || contentMatch || labelsMatch;
        });
        
        displayBlogPosts(filteredPosts);
        return filteredPosts;
    } catch (error) {
        console.error('خطأ في البحث عن المقالات:', error);
        return [];
    }
}

/**
 * دالة لتهيئة قسم المدونة
 */
function initBlogSection() {
    // تحميل المقالات عند تحميل الصفحة
    document.addEventListener('DOMContentLoaded', async () => {
        try {
            const posts = await fetchBlogPosts(3); // عرض 3 مقالات في البداية
            displayBlogPosts(posts);
            
            // إضافة زر "تحميل المزيد"
            const blogSection = document.getElementById('blog');
            if (blogSection) {
                const loadMoreContainer = document.createElement('div');
                loadMoreContainer.className = 'text-center mt-8';
                loadMoreContainer.innerHTML = `
                    <button id="loadMoreBtn" class="px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors">
                        تحميل المزيد
                    </button>
                `;
                blogSection.querySelector('.container').appendChild(loadMoreContainer);
                
                // إضافة حدث النقر لزر "تحميل المزيد"
                const loadMoreBtn = document.getElementById('loadMoreBtn');
                let currentPostCount = posts.length;
                
                loadMoreBtn.addEventListener('click', async () => {
                    const newCount = await loadMorePosts(currentPostCount);
                    currentPostCount = newCount;
                    
                    // إخفاء الزر إذا تم تحميل جميع المقالات
                    if (currentPostCount >= MAX_RESULTS) {
                        loadMoreBtn.style.display = 'none';
                    }
                });
                
                // إضافة حقل البحث
                const searchContainer = document.createElement('div');
                searchContainer.className = 'max-w-md mx-auto mb-8';
                searchContainer.innerHTML = `
                    <div class="relative">
                        <input type="text" id="blogSearch" placeholder="ابحث في المدونة..." 
                               class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 pr-10">
                        <button id="searchBtn" class="absolute left-2 top-1/2 transform -translate-y-1/2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>
                `;
                
                // إضافة حقل البحث قبل العنوان
                const blogTitle = blogSection.querySelector('h2').parentNode;
                blogSection.querySelector('.container').insertBefore(searchContainer, blogTitle);
                
                // إضافة حدث البحث
                const searchInput = document.getElementById('blogSearch');
                const searchBtn = document.getElementById('searchBtn');
                
                const handleSearch = () => {
                    const query = searchInput.value;
                    searchBlogPosts(query);
                };
                
                searchBtn.addEventListener('click', handleSearch);
                searchInput.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') {
                        handleSearch();
                    }
                });
            }
        } catch (error) {
            console.error('خطأ في تهيئة قسم المدونة:', error);
            const blogPostsContainer = document.getElementById('blogPosts');
            if (blogPostsContainer) {
                blogPostsContainer.innerHTML = '<p class="text-center text-red-500">حدث خطأ أثناء تحميل المقالات. يرجى تحديث الصفحة والمحاولة مرة أخرى.</p>';
            }
        }
    });
}

// تصدير الدوال للاستخدام الخارجي
window.blogAPI = {
    fetchBlogPosts,
    displayBlogPosts,
    loadMorePosts,
    searchBlogPosts,
    initBlogSection
};

// تهيئة قسم المدونة
initBlogSection();
