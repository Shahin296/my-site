import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="mediaGroup">
              <a href="https://web.facebook.com/profile.php?id=100014597521832"><i class="fa-brands fa-facebook"></i></a>
              <a href="https://github.com/Shahin296"><i class="fa-brands fa-github"></i></a>
              <a href="https://www.linkedin.com/in/mohammad-shahin-miah-31327b204/"><i class="fa-brands fa-linkedin"></i></a>
            </div>
            <p>Ⓒshahin {new Date().getFullYear()}</p>
        </footer>    
      
    );
};

export default Footer;