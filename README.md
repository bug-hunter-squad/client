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
     <p>Booking tickets is one process that many people often use before embarking on a journey or departing. The way that prospective passengers often make a reservation ticket is by ordering directly from the travel company, but the process is less effective both in terms of time and cost. For that, there is a need for the ordering process to be more effective both in terms of time as well as cost itself, as well as making it easier, more practical, and faster. Of course, when booking tickets, it is best to use a smartphone and the internet, because with this facility, all forms of ordering can be done anytime and anywhere, so it makes it easier for the people who will make the ticket reservations. In addition, with ticket reservations based on this website, everyone can access and get information on various products and services. Whether it's information about vehicles, departure schedules, or the price offered, everything can be accessed and obtained easily.</p>

  </li>
  <li>

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
  Here is a working live demo: https://client-theta-amber.vercel.app
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
    <td><img src="https://user-images.githubusercontent.com/45787278/190418877-4f4c5057-31e1-4870-8c67-71264b44e6f7.png" alt="lasagna" align="center"></td>
    <td><img src="https://user-images.githubusercontent.com/45787278/190418832-f2f42b8e-b4f8-4ea1-8404-f116d5a4da58.png" alt="lasagna" align="center"></td>
  </tr>
</table>
<table>
  <tr>
    <th>Register</th>
    <th>Home Explore</th>
    <th>SearchFlight</th>
  </tr>
  <tr>
    <td><img src="https://user-images.githubusercontent.com/45787278/190418817-c2527906-33cf-44e2-95db-ef615b1b10f9.png" alt="lasagna" align="center"></td>
    <td><img src="https://user-images.githubusercontent.com/45787278/190418882-28030003-fd7a-4104-8edd-010a3cfd608e.png"></td>
    <td><img src="https://user-images.githubusercontent.com/45787278/190418844-796277cb-2b7c-488e-8f90-33a95ea963d5.png" alt="lasagna" align="center"></td>
  </tr>
</table>
<table>
  <tr>
    <th>Search Result</th>
    <th>Detail FLight</th>
    <th>My booking</th>
  </tr>
  <tr>
    <td><img src="https://user-images.githubusercontent.com/45787278/190418846-da7086fa-f0f9-4504-9a87-0b73571029f9.png" alt="lasagna" align="center"></td>
    <td><img src="https://user-images.githubusercontent.com/45787278/190418849-4d6f5c77-e6e7-4694-a339-4ff995c8e062.png" alt="lasagna" align="center"></td>
    <td><img src="https://user-images.githubusercontent.com/45787278/190418872-3681db68-94db-4827-b227-c15d47f34802.png" alt="lasagna" align="center"></td>
  </tr>
</table>
<table>
  <tr>
    <th>Profile</th>
    <th>Edit Profile</th>
    <th>Alert</th>
  </tr>
  <tr>
    <td><img src="https://user-images.githubusercontent.com/45787278/190418837-c5e09923-8ab7-4b7f-be84-df549ef8afa3.png" alt="lasagna" align="center"></td>
    <td><img src="https://user-images.githubusercontent.com/45787278/190418840-ccaf6e63-3d7d-4fbe-b764-d9c8288d7eae.png" alt="lasagna" align="center"></td>
    <td><img src="https://user-images.githubusercontent.com/45787278/190418835-e4df4ee2-6de1-4068-a46b-65b478cacdcb.png" alt="lasagna" align="center"></td>
  </tr>
</table>
<table>
  <tr>
    <th>E-ticket</th>
    <th>Payment</th>
 
  </tr>
  <tr>
    <td><img src="https://user-images.githubusercontent.com/45787278/190418854-b7302b05-fd3a-40c9-b22c-72d4007e9bc4.png" alt="lasagna" align="center"></td>
    <td><img src="https://user-images.githubusercontent.com/45787278/190418860-8ad5716b-04e4-4055-a0e2-95f03e6e83f6.png" alt="lasagna" align="center"></td>
  </tr>
 </table>
 



 




<h3 name="Contributing">Contributing</h3>
Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.
If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!
<p>If you have difficulty contributing, please contact us</p>
<pre>📧 Email : Bughunter2022@gmail.com</pre>
  
<h3 name="Related">Related Project</h3>
 <a href="https://github.com/bug-hunter-squad/backend.git">🚀 Backend ankasa ticketing </a><br/>
 <a href="https://github.com/bug-hunter-squad/client.git">🚀 Client ankasa ticketing </a><br/>
  <a href="https://client-theta-amber.vercel.app/dashboard">🚀 Dashboard admin </a><br/>
 <a href="https://client-theta-amber.vercel.app">🚀 Domain server ankasa ticketing </a><br/>
 <a href="https://client-theta-amber.vercel.app">🚀 Demo ankasa ticketing</a><br/>
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


  
