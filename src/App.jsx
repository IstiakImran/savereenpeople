import React from "react";
import "./App.css";
import aboutUs from "/aboutUs.jpg";
import affortableApartment from "/affortableApartment.jpg";
import jobOpportunity from "/jobOpportunity.jpg";
import shareHolder from "/shareHolder.jpeg";
import { Link } from "react-router-dom";

const App = () => {

  return (
    <div className="landing-page">
      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>Welcome to<br></br>Save the People of Green Life</h1>
            <p>
              Providing affordable and secure housing solutions for the people
              of Bangladesh.
            </p>
            <Link to="/aboutus" className="btn btn-secondary">
              About Us
            </Link>
            <Link to="/ourprojects" className="btn btn-secondary">
              Our Projects
            </Link>
          </div>
        </section>

        <section className="about">
          <div className="about-content">
            <h1 className="titles">About Us</h1>
            <p>
              {`"আল্লাহ ব্যবসাকে হালাল করেছেন, সুদকে হারাম করেছেন" তাই হালাল পথে সম্পদ অর্জনের জন্য "সেভ দ্যা পিপল অফ গ্রিন লাইফ" কাংখিত লক্ষ্য মাত্রাকে সামনে নিয়ে তার যাত্রা শুরু করেছে।`}
            </p>
            <Link to="/about" className="btn btn-secondary">
              Read More
            </Link>
          </div>
          <div className="about-image">
            <img src={aboutUs} alt="About" />
          </div>
        </section>

        {/* Apartment Section */}
        <section className="apartment">
          <div className="apartment-image">
            <img src={affortableApartment} alt="Apartment" />
          </div>
          <div className="apartment-content">
            <h1 className="titles">Affordable Apartment</h1>
            <p>
              {` এই স্থানে ১২ শত স্কয়ার ফিট হতে ১০০০ থেকে ২০০০ স্কয়ার ফিট ফ্ল্যাট মোট ১০টি প্রকল্পের মধ্য হতে আপনার পছন্দের আবাসস্থলটি ৩৫০০০০ থেকে ১০০০০০০ টাকার মধ্যে  বেছে নিন। ২০০০ স্কয়ার ফুটের ৪০ টি ফ্লাট লটারির মাধ্যমে ৪০ জনকেবন্টন করা হবে।`}
            </p>
            <ul>
              <li>
                {`প্রকল্প আমিন বাজার`}
              </li>
              <li>{`প্রকল্প তুলশি মরিচ ব্রিজের পাশে দোহার রোড`}</li>
              <li>{`প্রকল্প আফতাব নগর`}</li>
              <li>{`প্রকল্প স্টাফ কোয়াটার রোড`}</li>
              <li>{`প্রকল্প মোহাম্মাদপুর মধুমিটি`}</li>
              <li>{`প্রকল্প উত্তরা দক্ষিন থান`}</li>
              <li>{`প্রকল্প আশুলিয়া`}</li>
              <li>{`প্রকল্প বরিশাল রোড`}</li>
              <li>{`প্রকল্প নবিনগর রোড`}</li>
              <li>{`প্রকল্প চিটাগাং রোড`}</li>


            </ul>

          </div>

        </section>

        {/* Employment Section */}
        <section className="employment">
          <div className="employment-content">
            <h1 className="titles">Employment Opportunities</h1>
            <p>
              {`"সেভ দ্যা পিপল অফ গ্রিন লাইফ" বৈদেশিক কর্মসংস্থানের অপার সম্ভাবনাকে কাজে লাগিয়ে নিয়েছে যুগান্তকারী পরিকল্পনা, যার মাধ্যমে বাংলাদেশে জাতীয় অর্থনীনৈতিক প্রবৃদ্ধিতে বিশেষ ভূমিকা রাখা ও আত্বকর্মসংস্থান সৃষ্টির মাধ্যমে কর্মহীন বিশাল জনগোষ্ঠিকে বিশেষ প্রশিক্ষনের মাধ্যমে ইউরোপ, আমেরিকা, কানাডা, অস্ট্রোলিয়া, মধ্যপ্রাচ্য, জাপান, দক্ষিন কোরিয়া সহ বিশ্বের বিভিন্ন দেশে কর্ম জোগাড় করে দেওয়া হবে।`}
            </p>
          </div>
          <div className="employment-image">
            <img src={jobOpportunity} alt="Employment" />
          </div>
        </section>

        {/* Shareholders Section */}
        <section className="shareholders">
          <div className="shareholders-image">
            <img src={shareHolder} alt="Shareholders" />
          </div>
          <div className="shareholders-content">
            <h1 className="titles">Become a Shareholder</h1>
            <p>
              {`সুষ্ঠ পরিকল্পনা ও কঠোর পরিশ্রমের মাধ্যমে মানসিক শক্তি নিয়ে এগুতে পারলে তার জন্য অর্থনৈতিক সমৃদ্ধি অর্জন করা সম্ভব। আমরা ৪০ জন মানুষকে সুষ্ঠ পরিকল্পনার আলোকে উন্নততর প্রশিক্ষনের মাধ্যমে কর্মক্ষম যোগ্যতর মানুষ হিসাবে গড়ে তুলবো, যার কর্ম নাই তার কর্মের ব্যবস্থা করবো। সেভ দ্যা পিপুল অফ গ্রিন লাইফ এ নতুন পরিচালক হওয়ার সুযোগ আছে। যারা এ সুবর্ণ সুযোগটি গ্রহন করিতে চান তারা আবেদন করতে পারবেন`}
            </p>
            <ul>
              <li>মাত্র ৩,০০,০০০/- টাকায় শেয়ার হোল্ডার হওয়ার সুযোগ।</li>
              <li>১০০০ থেকে ২০০০ স্কয়ার ফুটের ১ টি ফ্লাটের মালিক হওয়ার সুযোগ।</li>
              <li>
                বিদেশ যেতে চাইলে যে কোন রাষ্ট্রে কর্ম নিয়ে যাওয়ার সুযোগ।
              </li>
            </ul>
          </div>

        </section>


        {/* Contact Section */}
        <section className="contact">
          <div className="contact-content">
            <h1 className="titles">Get in Touch</h1>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" id="message" name="message" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </section>
      </main>
      <div className="offer">
        <p>
          Save the people of green life এ ডিরেক্টর হওয়ার সুবর্ণ সুযোগ। অত্র কোম্পানিতে যারা ডিরেক্টর হবেন তাদেরকে ৫০ হাজার টাকা সন্মানি ভাতা বা লেমোনারেশন প্রদান করা হবে ।সুযোগটি অল্প সময়ের মধ্যে গ্রহণ করা যাবে। বিস্তারিত সাক্ষাতে আলোচনা করে পদ পদবী প্রদান করা হবে
          <br />
          <br />
          <span>
            Eamil: <a href="mailto:savethepeopleofgreenlife@gmail.com">savethepeopleofgreenlife@gmail.com</a>
          </span>
        </p>

      </div>


    </div>
  );
};

export default App;
