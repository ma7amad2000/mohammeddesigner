document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // You can replace 'your-email@example.com' with your email address
    window.location.href = "sara.mktaz@gmail.com?subject=Message from " + name + " (" + email + ")&body=" + message;
});

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}


document.getElementById("arabicButton").addEventListener("click", function () {
    // قم بتغيير النصوص إلى اللغة العربية
    document.getElementById("greeting").innerHTML = ' <h3 id="greeting" dir = "rtl">أنا <span class="text-pry">محمد مكراز,</span>مصمم جرافيك</h3>';
});

document.getElementById("englishButton").addEventListener("click", function () {
    // قم بتغيير النصوص إلى اللغة الإنجليزية
    document.getElementById("greeting").innerHTML = 'I‘m <span class="text-pry">Mohammed Mkraz,</span> a Graphic Designer';
});





document.getElementById("arabicButton").addEventListener("click", function () {
    // قم بتغيير النصوص إلى اللغة العربية
    document.getElementById("greeting1").innerHTML = '<p dir="rtl"><b>العمر:</b> 22</p> <p dir="rtl"><b>البريد:</b> Mohammedesign2OOO@gmail.com</p> <p dir="rtl"><b>السكن:</b> Elmarj-Libya</p>';
});

document.getElementById("englishButton").addEventListener("click", function () {
    // قم بتغيير النصوص إلى اللغة الإنجليزية
    document.getElementById("greeting1").innerHTML = '<p><b>Age:</b> 22</p><p><b>Email:</b> Mohammedesign2OOO@gmail.com</p><p><b>Place:</b> Elmarj-Libya</p>';
});





document.getElementById("arabicButton").addEventListener("click", function () {
    // قم بتغيير النصوص إلى اللغة العربية
    document.getElementById("greeting2").innerHTML = '<p id="greeting2" dir="rtl">مرحبا, أنا محمد مكراز، شخص متعدد الأوجه ولدي شغف بالإبداع والتكنولوجيا. كمصمم جرافيك، أجد متعة في جلب الأفكار إلى الحياة من خلال التواصل المرئي. التصميم الجرافيكي، بالنسبة لي، ليس مجرد مهنة ولكنه منصة للتعبير عن أفكاري ومشاعري بطرق مبتكرة. إلى جانب جهودي في التصميم، أنا متحمس بشدة للتصوير الفوتوغرافي والتكوين. من خلال العدسة، ألتقط اللحظات التي تحكي قصصًا مقنعة وتثير مشاعر مختلفة. بالإضافة إلى ذلك، لدي اهتمام كبير بالبرمجة، حيث أستفيد من تفكيري الإبداعي لتطوير الحلول الرقمية والتجارب التفاعلية.  في كل هذه المجالات، أسعى باستمرار إلى تعزيز مهاراتي وتوسيع معرفتي، بهدف إحداث تأثير إيجابي وإلهام الآخرين من خلال عملي.</p>';
});

document.getElementById("englishButton").addEventListener("click", function () {
    // قم بتغيير النصوص إلى اللغة الإنجليزية
    document.getElementById("greeting2").innerHTML = '            <p id="greeting2"> Hello, I’m Mohammad Mkraz, a multifaceted individual with a passion for creativity and technology. As a graphic designer, I find joy in bringing ideas to life through visual communication. Graphic design, for me, is not merely a profession but a platform to express my thoughts and emotions in innovative ways. Alongside my design endeavors, I’m an avid enthusiast of photography and composition. Through the lens, I capture moments that tell compelling stories and evoke various emotions. Additionally, I have a keen interest in programming, where I leverage my creative thinking to develop digital solutions and interactive experiences. <br> <br>In all these realms, I constantly strive to enhance my skills and expand my knowledge,aiming to make a positive impact and inspire others through my work.</p>';
});




document.getElementById("arabicButton").addEventListener("click", function () {
    // قم بتغيير النصوص إلى اللغة العربية
    document.getElementById("greeting3").innerHTML = '<span class="text-pry">مرحبا, أنا</span>';
});

document.getElementById("englishButton").addEventListener("click", function () {
    // قم بتغيير النصوص إلى اللغة الإنجليزية
    document.getElementById("greeting3").innerHTML =  '<span class="text-pry">Hi There, I‘m</span>';
});




document.getElementById("arabicButton").addEventListener("click", function () {
    // قم بتغيير النصوص إلى اللغة العربية
    document.getElementById("greeting4").innerHTML = 'ع<span class="text-pry">ني</span>';
});

document.getElementById("englishButton").addEventListener("click", function () {
    // قم بتغيير النصوص إلى اللغة الإنجليزية
    document.getElementById("greeting4").innerHTML = 'About <span class="text-pry">Me</span>';
});





document.getElementById("arabicButton").addEventListener("click", function () {
    // قم بتغيير النصوص إلى اللغة العربية
    document.getElementById("greeting5").innerHTML = 'محمد مكراز';
});

document.getElementById("englishButton").addEventListener("click", function () {
    // قم بتغيير النصوص إلى اللغة الإنجليزية
    document.getElementById("greeting5").innerHTML = 'Mohammed Mkraz';
});





document.getElementById("arabicButton").addEventListener("click", function () {
    // قم بتغيير النصوص إلى اللغة العربية
    document.getElementById("greeting6").innerHTML = 'مصمم جرافيك و مطور واجهات';
});

document.getElementById("englishButton").addEventListener("click", function () {
    // قم بتغيير النصوص إلى اللغة الإنجليزية
    document.getElementById("greeting6").innerHTML = ' Graphic Designer , Front-End developer';
});






document.getElementById("arabicButton").addEventListener("click", function () {
    // قم بتغيير النصوص إلى اللغة العربية
    document.getElementById("greeting7").innerHTML = 'تحميل CV<i class="fa-solid fa-circle-arrow-down">';
});

document.getElementById("englishButton").addEventListener("click", function () {
    // قم بتغيير النصوص إلى اللغة الإنجليزية
    document.getElementById("greeting7").innerHTML = 'Download CV<i class="fa-solid fa-circle-arrow-down">';
});



document.getElementById("arabicButton").addEventListener("click", function () {
    // قم بتغيير النصوص إلى اللغة العربية
    document.getElementById("greeting8").innerHTML = '</i> مهارات &amp; <samp class="text-pry">قدرات</samp>';
});

document.getElementById("englishButton").addEventListener("click", function () {
    // قم بتغيير النصوص إلى اللغة الإنجليزية
    document.getElementById("greeting8").innerHTML = '</i> Skills &amp; <samp class="text-pry">Abilities</samp>';
});



document.getElementById("arabicButton").addEventListener("click", function () {
    // قم بتغيير النصوص إلى اللغة العربية
    document.getElementById("greeting9").innerHTML = 'خد<span class="text-pry">ماتي</span>';
});

document.getElementById("englishButton").addEventListener("click", function () {
    // قم بتغيير النصوص إلى اللغة الإنجليزية
    document.getElementById("greeting9").innerHTML = 'My<span class="text-pry">Services</span>';
});




document.getElementById("arabicButton").addEventListener("click", function () {
    // قم بتغيير النصوص إلى اللغة العربية
    document.getElementById("item1").innerHTML = 'تصميم شعارات';
});

document.getElementById("englishButton").addEventListener("click", function () {
    // قم بتغيير النصوص إلى اللغة الإنجليزية
    document.getElementById("item1").innerHTML = 'Logo design';
});



document.getElementById("arabicButton").addEventListener("click", function () {
    // قم بتغيير النصوص إلى اللغة العربية
    document.getElementById("p1").innerHTML = 'تصميم شعارات عصرية وبسيطة تعكس رؤيتك وأهدافك';
});

document.getElementById("englishButton").addEventListener("click", function () {
    // قم بتغيير النصوص إلى اللغة الإنجليزية
    document.getElementById("p1").innerHTML = 'Design modern and simple logos that reflect your vision and goals';
});




document.getElementById("arabicButton").addEventListener("click", function () {
    // قم بتغيير النصوص إلى اللغة العربية
    document.getElementById("item2").innerHTML = 'تصميم فيتشرز وبوسترات';
});

document.getElementById("englishButton").addEventListener("click", function () {
    // قم بتغيير النصوص إلى اللغة الإنجليزية
    document.getElementById("item2").innerHTML = 'Social Media Design';
});




document.getElementById("arabicButton").addEventListener("click", function () {
    // قم بتغيير النصوص إلى اللغة العربية
    document.getElementById("p2").innerHTML = 'تصميم منشورات بسيطة وهادفة على وسائل التواصل الاجتماعي تستهدف جمهورك';
});

document.getElementById("englishButton").addEventListener("click", function () {
    // قم بتغيير النصوص إلى اللغة الإنجليزية
    document.getElementById("p2").innerHTML = 'Design simple and purposeful social media posts that target your audience';
});




document.getElementById("arabicButton").addEventListener("click", function () {
    // قم بتغيير النصوص إلى اللغة العربية
    document.getElementById("item3").innerHTML = 'رسم رقمي';
});

document.getElementById("englishButton").addEventListener("click", function () {
    // قم بتغيير النصوص إلى اللغة الإنجليزية
    document.getElementById("item3").innerHTML = 'Digital drawing';
});



document.getElementById("arabicButton").addEventListener("click", function () {
    // قم بتغيير النصوص إلى اللغة العربية
    document.getElementById("p3").innerHTML = 'استغلال التكنولوجيا ودمجها بالفن والرسم';
});

document.getElementById("englishButton").addEventListener("click", function () {
    // قم بتغيير النصوص إلى اللغة الإنجليزية
    document.getElementById("p3").innerHTML = 'Exploiting technology and integrating it with art and drawing';
});








document.getElementById("arabicButton").addEventListener("click", function () {
    // قم بتغيير النصوص إلى اللغة العربية
    document.getElementById("item4").innerHTML = 'تطوير المواقع';
});

document.getElementById("englishButton").addEventListener("click", function () {
    // قم بتغيير النصوص إلى اللغة الإنجليزية
    document.getElementById("item4").innerHTML = 'Web development';
});



document.getElementById("arabicButton").addEventListener("click", function () {
    // قم بتغيير النصوص إلى اللغة العربية
    document.getElementById("p4").innerHTML = 'يمكنني إنشاء موقع ويب باستخدام HTML وCSS وJavaScript';
});

document.getElementById("englishButton").addEventListener("click", function () {
    // قم بتغيير النصوص إلى اللغة الإنجليزية
    document.getElementById("p4").innerHTML = 'I can build a website by using HTML, CSS, and JavaScript';
});




document.getElementById("arabicButton").addEventListener("click", function () {
    // قم بتغيير النصوص إلى اللغة العربية
    document.getElementById("item5").innerHTML = 'العمل الجماعي';
});

document.getElementById("englishButton").addEventListener("click", function () {
    // قم بتغيير النصوص إلى اللغة الإنجليزية
    document.getElementById("item5").innerHTML = 'Work as a team';
});




document.getElementById("arabicButton").addEventListener("click", function () {
    // قم بتغيير النصوص إلى اللغة العربية
    document.getElementById("p5").innerHTML = 'أستطيع العمل ضمن فريق وقيادته';
});

document.getElementById("englishButton").addEventListener("click", function () {
    // قم بتغيير النصوص إلى اللغة الإنجليزية
    document.getElementById("p5").innerHTML = 'Able to cooperate and form a good team';
});




document.getElementById("arabicButton").addEventListener("click", function () {
    // قم بتغيير النصوص إلى اللغة العربية
    document.getElementById("item6").innerHTML = 'الإبداعية';
});

document.getElementById("englishButton").addEventListener("click", function () {
    // قم بتغيير النصوص إلى اللغة الإنجليزية
    document.getElementById("item6").innerHTML = 'Creativity';
});



document.getElementById("arabicButton").addEventListener("click", function () {
    // قم بتغيير النصوص إلى اللغة العربية
    document.getElementById("p6").innerHTML = 'قادر على التفكير خارج الدوقات وواستنباط الافكار من حولي واعادة توظيفها';
});

document.getElementById("englishButton").addEventListener("click", function () {
    // قم بتغيير النصوص إلى اللغة الإنجليزية
    document.getElementById("p6").innerHTML = 'Able to think outside the box and extract ideas from those around me and repurpose them';
});



document.getElementById("arabicButton").addEventListener("click", function () {
    // قم بتغيير النصوص إلى اللغة العربية
    document.getElementById("greeting10").innerHTML = '<i class="fa-solid fa-pen-ruler"></i> البو<samp class="text-pry">تفوليو</samp>';
});

document.getElementById("englishButton").addEventListener("click", function () {
    // قم بتغيير النصوص إلى اللغة الإنجليزية
    document.getElementById("greeting10").innerHTML = '<i class="fa-solid fa-pen-ruler"></i> My <samp class="text-pry">Portfolio</samp>';
});
