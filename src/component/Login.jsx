import React from 'react'

export default function Login() {
  return (
    <>
   <div className="container mt-5 pt-5">
     {/* <!--Section: Contact v.2--> */}
<section className="col-lg-12 mb-4 mx-auto rounded border border-primary px-5 pb-4">

    {/* <!--Section heading--> */}
    <h2 className="h1-responsive font-weight-bold text-center my-4">"Log in and unlock your world!"</h2>
    {/* <!--Section description--> */}
    <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>

    <div className="row">

        {/* <!--Grid column--> */}
        <div className="col-md-6 mx-auto mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                {/* <!--Grid row--> */}
                <div className="row">

                    {/* <!--Grid column--> */}
                    <div className="col-md-6 col-lg-12 mb-3">
                        <div className="md-form mb-0">
                            <input type="text" id="name" name="name" className="form-control"/>
                            <label for="name" className="">User name</label>
                        </div>
                    </div>
                

                    {/* <!--Grid column--> */}
                    <div className="col-md-6 col-lg-12 mb-3">
                        <div className="md-form mb-0">
                            <input type="text" id="password" name="email" className="form-control"/>
                            <label for="email" className="">Your Password</label>
                        </div>
                    </div>
                    {/* <!--Grid column--> */}

                </div>
                {/* <!--Grid row--> */}
            </form>

            <div className="text-center text-md-left">
                <button className="btn btn-primary">Login</button>
            </div>
            <div className="status"></div>
        </div>
        {/* <!--Grid column--> */}

        {/* <!--Grid column--> */}
        <div className="col-md-12 text-center ">
            <ul className="list-unstyled mb-0 mt-3 d-flex justify-content-between">
                <li className="mt-3"><i className="fa fa-map-marker-alt fa-2x"></i>
                    <p>Nerul ,New Mumbai, India</p>
                </li>

                <li><i className="fas fa-phone mt-4 fa-2x"></i>
                    <p>7420000655</p>
                </li>

                <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                    <p>kalpeshbaviskar797@gmail.com</p>
                </li>
            </ul>
        </div>
        {/* <!--Grid column--> */}

    </div>

</section>
{/* <!--Section: Contact v.2--> */}
     </div>
    </>
  )
}
