
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            <i><b>I'm always interested in new opportunities and collaborations. 
            Feel free to reach out if you'd like to work together! </b></i>
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
               <i><h3 className="text-2xl font-semibold text-gray-800 mb-6">Let's Connect</h3></i>
                <i><b><p className="text-gray-600 leading-relaxed">
                  Whether you have a project in mind, want to collaborate, or just want to say hello, 
                  I'd love to hear from you. Drop me a message and I'll get back to you as soon as possible.
                </p></b></i>
              </div>

              <div className="space-y-4">
                <a 
                  href="mailto:dawayoezer22@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-blue-50 transition-colors duration-200 group"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-200">
                    <Mail className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Email</h4>
                    <i><b><p className="text-gray-600">dawayoezer22@gmail.com</p></b></i>
                  </div>
                </a>

                <a 
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                >
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-200">
                    <Github className="text-gray-700" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">GitHub</h4>
                    <i><b><p className="text-gray-600">@Yoez2</p></b></i>
                  </div>
                </a>

                <a 
                  href="https://www.linkedin.com/in/dawa-yoezer-205788322/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-blue-50 transition-colors duration-200 group"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-200">
                    <Linkedin className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">LinkedIn</h4>
                    <i><b><p className="text-gray-600">Dawa Yoezer</p></b></i>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-8 text-white">
              <h3 className="text-xl font-semibold mb-4">Quick Contact</h3>
              <p className="mb-6 opacity-90">
                <i><b>Ready to start a project or have a question? Send me a quick message!</b></i>
              </p>
              
              <a 
                href="mailto:your.email@example.com?subject=Hello!&body=Hi, I'd like to get in touch regarding..."
                className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 hover:scale-105 transform"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
