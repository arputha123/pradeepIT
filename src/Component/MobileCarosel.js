import Phone from '../Assets/phone.png';
function MobileCarosel () {
    return(

      <div style={{ marginTop: 50, backgroundColor: '#EFEFEF',height:"auto" }}>
           
<div id="portfolioslides" class="carousel slide center-block" data-ride="carousel">
    <ol class="carousel-indicators">
        <li data-target="#portfolioslides" data-slide-to="0" class="active p-0 me-2" style={{border:'2px solid black'}}></li>
        <li data-target="#portfolioslides" data-slide-to="1" class="p-0 me-2" style={{border:'2px solid black'}}></li>
        <li data-target="#portfolioslides" data-slide-to="2" class="p-0 me-2" style={{border:'2px solid black'}}></li>

    </ol>
    <div class="carousel-inner">
        <div class="item active">
            <div class="container-fluid ">
                <div class="row align-items-center ps-5 Phone" >
                    <div class="col-md-6 ">
                        <div style={{ paddingLeft: 70 }}>
                        </div>

                        <img src={Phone} style={{ paddingLeft: '15%' }}></img>
                    </div>
                    <div class="col-md-6 phone1" style={{ display: 'flex', flexDirection: 'row', lineHeight: 2 }}>
                        <div
                            style={{ marginRight: 30 }}
                        >
                            <h1 style={{ fontSize: 80, color: "#000000" }}>01</h1>
                        </div>
                        <div style={{ borderRight: '1px solid black', height: 80, marginRight: 50 }}></div>
                        <div>
                            <h4 style={{ fontSize: 20, color: "#000000", wordSpacing: 2, paddingBottom: 5 }}>M3 WALLET POWERED BY YES BANK</h4>
                            <h6 style={{ fontSize: 14, paddingBottom: 2}}>MAKE INSTANT MONEY TRANSFER & DIGITAL PAYMENTS</h6><br></br>
                            <p style={{ fontSize: 14, color: '#5E5E5E', paddingBottom: 7 }}>Mobile wallets are no longer just a trend they have become<br></br>
                                a need of the time. However to relish the benifits of this<br></br>
                                fast evolving market ,you need to ensure flawless<br></br>
                                implementation of facts and features
                            </p>

                            <button class="Study">VIEW CASE STUDY</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="item">
        <div class="container-fluid">
                                <div class="row d-flex align-items-center ps-5" style={{ backgroundColor: '#F6F6F6', height: '70vh' }}>
                                    <div class="col-md-6 col-sm-6 col-xs-10" style={{display:'flex',flexDirection:'row',lineHeight:2}}>
                                    <div
                                         style={{ marginRight: 30 }} 
                                         >
                                            <h1 style={{fontSize:80,color:"#000000"}}>02</h1>
                                        </div>
                                        <div style={{borderRight:'1px solid black',height:80,marginRight:50}}></div>
                                      <div style={{display:'flex',flexDirection:'column'}}>
                                        <h4 class="ps-4" style={{ fontSize: 20 , color:"#000000",wordSpacing:2,paddingBottom:10}}>CLUSTER INDIA</h4>
                                        <h6 style={{ fontSize: 14,paddingBottom:7 }}>WEB DESIGN | BRAND STRATEGY</h6>
                                        <p style={{ fontSize: 14, color: '#5E5E5E' }}>Cluster is platform for eco sysytem which enables a<br></br>
                                            Candiate to Learn ,Experience,Execute and therby<br></br>
                                            Become a smart Software Developer in a short span of time
                                        </p>

                                        <button class="Study">VIEW CASE STUDY</button>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-sm-6 col-xs-10">

                                    </div>

                                </div>
                            </div>
        </div>

        <div class="item">
        <div class="container-fluid">
                            <div class="row d-flex align-items-center ps-5" style={{ backgroundColor: '#F6F6F6', height: '70vh' }}>
                                <div class="col-md-6 col-sm-6 col-xs-10" style={{ display: 'flex', flexDirection: 'row', lineHeight: 2 }}>
                                    <div
                                        style={{ marginRight: 30 }}
                                    >
                                        <h1 style={{ fontSize: 80, color: "#000000" }}>03</h1>
                                    </div>
                                    <div style={{ borderRight: '1px solid black', height: 80, marginRight: 50 }}></div>
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>

                                        <h4 class="ps-4" style={{ fontSize: 20, paddingBottom: 10 }}>M3 WALLET POWERED BY YES BANK</h4>
                                        <h6 style={{ fontSize: 14, paddingBottom: 7 }}>MAKE INSTANT MONEY TRANSFER & DIGITAL PAYMENTS</h6>
                                        <p style={{ fontSize: 14, color: '#5E5E5E' }}>Mobile wallets are no longer just a trend they have become<br></br>
                                            a need of the time. However to relish the benifits of this<br></br>
                                            fast evolving market ,you need to ensure flawless<br></br>
                                            implementation of facts and features
                                        </p>

                                        <button class="Study">VIEW CASE STUDY</button>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6 col-xs-10">

                                </div>

                            </div>
                        </div>
        </div>



    </div>

</div>

        </div>
    )
}
export default MobileCarosel;