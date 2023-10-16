
import Office1 from '../Assets/office1.jpg'
import Office2 from '../Assets/office2.jpg'
import Office3 from '../Assets/office3.jpg';
import officeStaff from '../Assets/officeStaff.png';
import quotes from '../Assets/quotes.png';

function ImageComponent() {
    return (
        <div class="container-fluid d-flex justify-content-center container" style={{ paddingTop: 60, paddingLeft: 50, paddingBottom: 40 }}>
            <div class="row ">
                <div class="col-md-4 col-sm-6 col-xs-12">
                    <img src={Office1} style={{ height: 130, width: 130, borderRadius: 65, marginLeft: 120, marginBottom: 20 }} />

                    <div class="d-flex column">

                    </div>
                    <p style={{ fontSize: 14, paddingLeft: 8, paddingRight: 8, paddingBottom: 20, textAlign: 'center' }}>Solution Architect & Integration Consultant with Total 11 years in Enterprise Application development &  7+ years of experience in hybris/ SAP C/4  HANA eCommerce platform integrated with Solr involving end to end development</p>
                    <h5 style={{ fontWeight: 600, textAlign: 'center' }}>VINOD KUMAR - PRINCIPAL CONSULTANT</h5>
                    {/* <img src={quotes} style={{width:50,height:50,textAlign:'center'}}></img> */}
                    <h1 style={{ color: '#FDD947', textAlign: 'center',fontSize:30 }}><b>""</b></h1>
                </div>

                <div class="col-md-4 col-sm-6 col-xs-12">
                    <img src={officeStaff} style={{ height: 130, width: 130, borderRadius: 65, marginLeft: 100, marginBottom: 20 }} />


                    <div class="d-flex column">

                    </div>
                    <p style={{ fontSize: 14, paddingLeft: 8, paddingRight: 8, paddingBottom: 10, textAlign: 'center' }}>WooCommerce Experts and provide custom solutions. Our capabilities include design, development and extending WooCommerce functionalities. Our clients range the from beverage to clothing to manufacturing and education industries.</p>
                    <h5 style={{ fontWeight: 600, textAlign: 'center' }}>HAMZAH ALI- TECHNICAL MANAGER</h5>
                    <h1 style={{ color: '#FDD947', textAlign: 'center',fontSize:30  }}><b>""</b></h1>
                </div>

                <div class="col-md-4 col-sm-6 col-xs-12">
                    <img src={Office3} style={{ height: 130, width: 130, borderRadius: 65, marginLeft: 100, marginBottom: 20 }} />

                    <div class="d-flex column">

                    </div>
                    <p style={{ fontSize: 14, paddingLeft: 8, paddingRight: 8, paddingBottom: 10, textAlign: 'center' }}>Lead Consultant and propose Magento solutions as
                        per client requirements, Review business requirements working with other team members,Perform a technical analysis of requirements.</p>
                    <h5 style={{ fontWeight: 600, textAlign: 'center' }}>PRAKASH PATIL-LEAD CONSULTANT</h5>
                    <h1 style={{ color: '#FDD947', textAlign: 'center',fontSize:30  }}><b>""</b></h1>
                </div>

            </div>
        </div>
    )
}
export default ImageComponent;