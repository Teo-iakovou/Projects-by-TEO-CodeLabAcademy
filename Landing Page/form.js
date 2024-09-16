
    const testimonials = [
      {
        name: "June Cha",
        position: "Software Engineer",
        photo: "https://randomuser.me/api/portraits/women/44.jpg",
        text: "This platform is an absolute game-changer for competitive programmers. The extensive range of problems and challenges offered here truly hones your skills and prepares you for any coding competition. With detailed solutions and an active community, it's the perfect environment to sharpen your coding prowess."
      },
      {
        name: "Iida Niskanen",
        position: "Data Engineer",
        photo: "https://randomuser.me/api/portraits/women/67.jpg",
        text: "I can't express enough how valuable this platform has been for me. As someone deeply passionate about algorithms and data structures, I've found the diverse set of problems here both stimulating and enriching. The intuitive interface and seamless experience make it my go-to destination for honing my problem-solving skills."
      },
      {
        name: "Renee Sims",
        position: "Cloud Engineer",
        photo: "https://randomuser.me/api/portraits/women/8.jpg",
        text: "If you're serious about excelling in competitive coding, look no further. This platform not only provides a comprehensive set of problems but also fosters a supportive community where you can exchange ideas and strategies. It's been instrumental in my journey towards becoming a better competitive coder."
      },
      {
        name: "Sasha Ho",
        position: "PhD Student",
        photo: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
        text: "I've tried numerous competitive programming platforms, but none come close to the quality and depth offered here. From beginner-friendly challenges to advanced algorithmic puzzles, there's something for everyone."
      },
      {
        name: "Veeti Seppanen",
        position: "Frontend Developer",
        photo: "https://randomuser.me/api/portraits/men/97.jpg",
        text: "As a seasoned programmer, I'm always on the lookout for platforms that challenge and inspire me. This platform exceeds all expectations with its vast array of problems and unparalleled learning resources."
      }
    ];
  
    let currentTestimonialIndex = 0;

    // Function to update the testimonial content
    function updateTestimonial(index) {
      const testimonial = testimonials[index];
      document.getElementById('testimonial-text').innerText = testimonial.text;
      document.getElementById('testimonial-img').src = testimonial.photo;
      document.getElementById('testimonial-name').innerText = testimonial.name;
      document.getElementById('testimonial-position').innerText = testimonial.position;
    }
  
    // Function to show the next testimonial
    function nextTestimonial() {
      currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
      updateTestimonial(currentTestimonialIndex);
    }
  
    // Function to show the previous testimonial
    function prevTestimonial() {
      currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
      updateTestimonial(currentTestimonialIndex);
    }
  
    // Automatically switch testimonials every 3 seconds
    setInterval(nextTestimonial, 3000);
  
    document.getElementById('next-btn').addEventListener('click', nextTestimonial);
    document.getElementById('prev-btn').addEventListener('click', prevTestimonial);
  
    updateTestimonial(currentTestimonialIndex);