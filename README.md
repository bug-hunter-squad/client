<h1 align="center">Ankasa Ticketing</h1> <br/>
<p align="center">Frontend with makes in Next JS Framework</p>
<p align="center"><img src="https://user-images.githubusercontent.com/45787278/186787922-e4336329-8367-445d-94db-db172eebb867.png" alt="lasagna" align="center"></p>
<p align="center"><a href="https://github.com/bug-hunter-squad/client/issues/13">Report a Bug • </a><a href="https://github.com/bug-hunter-squad/client/issues/14">Request a Feature • </a><a href="https://github.com/bug-hunter-squad/client/issues/15">Ask a Question</a></p> <br/>
<p align="center"><a href="https://github.com/bug-hunter-squad/client/blob/main/LICENSE"><img alt="GitHub license" src="https://img.shields.io/github/license/bug-hunter-squad/client"> <img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/bug-hunter-squad/client?color=277BC0"></a></p>

<details>
<summary>Table of Contents</summary>
<br/>
  
* [About the project](#about)
    * [Made with](#built)
* [Demo](#demo)
* [Getting Started](#getting)
  * [Prerequisites](#Prerequisites)
  * [Installation](#Installation)
* [Screenshot](#Screenshot)
* [Contributing](#Contributing)
* [Related Project](#Related)
* [Our Team](#Team)
* [License](#License)
</details>

<h3 name="about">About the project</h3>
<ul>
  <li>
    <h4>Background</h4>
     <p>Booking tickets is one process that many people often use before embarking on a journey or departing. The way that prospective passengers often make a reservation ticket is by ordering directly from the travel company, but the process is less effective both in terms of time and cost. For that, there is a need for the ordering process to be more effective both in terms of time as well as cost itself, as well as making it easier, more practical, and faster. Of course, when booking tickets, it is best to use a smartphone and the internet, because with this facility, all forms of ordering can be done anytime and anywhere, so it makes it easier for the people who will make the ticket reservations. In addition, with ticket reservations based on this website, everyone can access and get information on various products and services. Whether it's information about vehicles, departure schedules, or the price offered, everything can be accessed and obtained easily.</p>![Splashscreen (1)](https://user-images.githubusercontent.com/45787278/189545367-45ad454f-5dc1-45f1-9854-60d47bbae117.png)

  </li>
  <li>![Chat (2)](https://user-images.githubusercontent.com/45787278/189546084-bb34e353-32ac-437e-83f6-4dfafdb058d0.png)

  <h4>About</h4>
<p>Ankasa ticketing is a ticket search and booking website, where people can order tickets online quickly and easily, besides that there are customer services that help to help your journey if there are problems when ordering tickets.</p>
  </li>
  <li>
  <h4 name="built">Made with</h4>
<p>This website was created using a framework/library</p>
<ul>
  <li>Next.JS</li>
  <li>Redux</li>
  <li>Bootstrap v5.2</li>
  <li>Midtrans (gateaway payment)</li> 
  <li>Cloudinary (for media files)</li>
  <li>Axios</li>
  <li>AWR</li>
 </ul>
  </li>
</ul>

<h3 name="demo">Demo</h3>
  Here is a working live demo:https://client-bug-hunter.vercel.app
<br/>
<h3 id=getting>Getting started</h3>
<ul>
   <li>
     <h4 id=Prerequisites>Prerequiresites</h4>
     <ul>
       <li>Downloading and installing Node.js and npm or you can use command:</li>
       <pre><code>npm install npm@latest -g</code> </pre>
       <li>Checking your version of npm and Node.js</li>
       <p>To see if you already have Node.js and npm installed and check the installed version, run the following commands:</p>
       <pre><code>node -v</code></pre>
        <pre><code>npm -v</code></pre>
       <p>In this project I use <code>version v16.15.1</code></p> 
       <li>Set up multiple accounts for configuration
       <ul>
         <li><a href="https://cloudinary.com/">Cloudinary<a></li>
         <li><a href="https://midtrans.com/">Midtrans (for gateaway payment)<a></li>
         <li><a href="https://google.com/">Account Gmail (for send otp)<a></li>
         </ul>
       </li>
     </ul>
  </li>
  <li>
     <h4 id=Installation>Instalation</h4>
      <ul>
        <li>Clone project
          <ul>
             <li>Backend (server) || or you can use an endpoint server 👉<code><a href="https://github.com/bug-hunter-squad/backend.git">link<a></code> 
             <pre><code>git clone -b development https://github.com/bug-hunter-squad/backend.git</code> </pre>
             </li>
            <li>Client
             <pre><code>git clone https://github.com/bug-hunter-squad/client.git</code></pre>
             </li>
           </ul>
          <li>Install all dependencies
             <pre><code>npm install</code> </pre>
          </li>
          <li>Settup <code>.env.example</code></li>
             <pre><code>Fill all secret keys</code></pre>
          <li>Settup database</li>
          <p>go to directory documentation</p>
             <pre><code>psql -U postgres -p 5432 -h localhost -d db_name -f ankasa_ticketing.psql</code> </pre>
          <li>Run project</li>
            <pre><code>npm run dev</code></pre>
        </ul>
        

<h3 name="Screenshot">Screenshot</h3>
<table>
  <tr>
    <th>Splashscreen</th>
    <th>Welcome</th>
    <th>Login</th>
  </tr>
  <tr>
    <td><img src="https://user-images.githubusercontent.com/45787278/189545380-7fcb5660-6ccc-4d25-b1ea-5eebb4eee94a.png" alt="lasagna" align="center"></td>
    <td><img src="https://user-images.githubusercontent.com/45787278/189544822-2181c332-6a5a-4cfe-9396-051d04119f1e.png" alt="lasagna" align="center"></td>
    <td><img src="https://user-images.githubusercontent.com/45787278/189544831-6b5b6a3b-bfff-4a93-bc5c-fd078bd05f42.png" alt="lasagna" align="center"></td>
  </tr>
</table>
<table>
  <tr>
    <th>Register</th>
    <th>Home Explore</th>
    <th>SearchFlight</th>
  </tr>
  <tr>
    <td><img src="https://user-images.githubusercontent.com/45787278/189544819-eb4e85db-021d-4984-8666-21bb05a17be8.png" alt="lasagna" align="center"></td>
    <td><img src="https://user-images.githubusercontent.com/45787278/189544824-17cb94d5-0eea-4cac-a8d6-e51e607f8e90.png" alt="lasagna" align="center"></td>
    <td><img src="https://user-images.githubusercontent.com/45787278/189544817-2f4b9312-2a37-4bd4-bed8-d77aaa7970ec.png" alt="lasagna" align="center"></td>
  </tr>
</table>
<table>
  <tr>
    <th>Search Result</th>
    <th>Detail FLight</th>
    <th>My booking</th>
  </tr>
  <tr>
    <td><img src="https://user-images.githubusercontent.com/45787278/189544828-e3f8c7cd-e485-4bb5-a141-17258ca9ffc2.png" alt="lasagna" align="center"></td>
    <td><img src="https://user-images.githubusercontent.com/45787278/189544825-e7da174b-cd0f-421f-b97d-20360ae8046f.png" alt="lasagna" align="center"></td>
    <td><img src="https://user-images.githubusercontent.com/45787278/189545824-b365e0ac-d8ee-45c0-b7a1-ee7b0c4944fe.png" alt="lasagna" align="center"></td>
  </tr>
</table>
<table>
  <tr>
    <th>Profile</th>
    <th>Notification</th>
    <th>Chat</th>
  </tr>
  <tr>
    <td><img src="https://user-images.githubusercontent.com/45787278/189544826-9966f30b-25f3-4098-9377-3d7df5ee19c5.png" alt="lasagna" align="center"></td>
    <td><img src="https://user-images.githubusercontent.com/45787278/189544834-20efc3b8-4d61-48d7-86d4-7efd63265908.png" alt="lasagna" align="center"></td>
    <td><img src="https://user-images.githubusercontent.com/45787278/189546128-54a0b734-8457-4572-9980-75e8b42559d1.png" alt="lasagna" align="center"></td>
  </tr>
</table>
<table>
  <tr>
    <th>E-ticket</th>
 
  </tr>
  <tr>
    <td><img src="https://user-images.githubusercontent.com/45787278/189546158-a17cb507-12d5-40f1-a8b5-a936f9e12896.png" alt="lasagna" align="center"></td>
  </tr>
 </table>




<h3 name="Contributing">Contributing</h3>
Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.
If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!
<p>If you have difficulty contributing, please contact us</p>
<pre>📧 Email : Bughunter2022@gmail.com</pre>
  
<h3 name="Related">Related Project</h3>
 <a href="https://github.com/bug-hunter-squad/backend.git">🚀 Backend ankasa ticketing </a><br/>
 <a href="https://github.com/bug-hunter-squad/backend.git">🚀 Client ankasa ticketing </a><br/>
  <a href="https://client-bug-hunter.vercel.app/dashboard">🚀 Dashboard admin </a><br/>
 <a href="https://bug-hunter-squad.herokuapp.com">🚀 Domain server ankasa ticketing </a><br/>
 <a href="https://client-bug-hunter.vercel.app">🚀 Demo ankasa ticketing</a><br/>
<h3 name="Team">Our Team</h3>
<br/>
<table>
  <tr>
    <th>Leader</th>
    <th>Frontend</th>
    <th>Frontend</th>
    <th>Backend</th>
    <th>Backend</th>
  </tr>
  <tr>
    <td><a href="https://github.com/nanangNSL"><img src="https://avatars.githubusercontent.com/u/45787278?v=4" alt="lasagna" align="center">nanangNSL</a></td>
    <td><a href="https://github.com/Ikhsanazis"><img src="https://avatars.githubusercontent.com/u/106055423?v=4" alt="lasagna" align="center">Ikhsanazis</a></td>
    <td><a href="https://github.com/taufik17"><img src="https://avatars.githubusercontent.com/u/26295152?v=4" alt="lasagna" align="center">taufik17</a></td>
    <td><a href="https://github.com/mikhaelkevin"><img src="https://avatars.githubusercontent.com/u/102899084?v=4" alt="lasagna" align="center">mikhaelkevin</a></td>
    <td><a href="https://github.com/apriyantodwiherlambang"><img src="https://avatars.githubusercontent.com/u/99805986?v=4" alt="lasagna" align="center" width="180px" height="180px">apriyantodwiherlambang</a></td>
  </tr>
</table>
<h3 name="License">License</h3>
<code>📃 https://github.com/bug-hunter-squad/client/blob/main/LICENSE</code>


  
