pragma solidity^0.4.11;
contract MileStoneTracker1 {
     address    Admin;
     address[]  customer_aray;
     address[] serviceprovider_aray;
    function MileStoneTracker1()
    {
        Admin=msg.sender;
    }
    struct Contract{
        uint256 start_time;
        uint256 end_time;
        uint256 price;
        uint256 service_type;
        MilestoneStatus status;
        uint256 contract_ID;
        uint256 deadline;
        uint256 cust_id;
        bytes32 field_type;
        bytes32 field_value;
        address setcustomer;
        address setserv_provider;
        address set_admin;
        uint256[] miles_milestone_id;
        mapping(uint256=>bool)chkcont;
    }
    struct Template {
        bytes32 name;
        bytes32 description1;
        bool status;
        uint256 temp_id;
        uint256 category_id;
        uint256[] contract_id;
        mapping(uint256=>bool)chkTemp;
    }
    struct Milestone {
         bytes32 name;
         bytes32 execution_work;
         bytes32 schedule;
         bytes32 taxes;
         uint256 fees;
         uint256  penalty;
         uint256 start_date;
         uint256 end_date;
         uint256 price;
         uint256 mainID;
         MilestoneStatus status;
         uint256 deadline1;
         uint256 deadline2;
         uint256 deadline3;
         uint256 milestone_id;
         mapping(uint256=>bool)chkmile;
     }
 
    struct category {
         bytes32 category_type;
         uint256 category_id;
         uint256 cate_mainId;
         bool status;
         uint256[] temp_list;
         mapping(uint256=>bool)chkcate;
    }
   struct service_Provider{
         bytes32 fname1;
         bytes32 lname1;
         uint256 service_type;
         bytes32 email1;
         bytes32 password1;
         uint256 phone_no1;
         address serviceprovider;
         uint256 serviceProvider_id;
         address wallet_address;
         mapping(uint256=>bool)chkserv;
    }
    struct customer_info{
         bytes32 fname;
         bytes32 lname;
         bytes32 email;
         bytes32 password;
         uint256 phone_no;
         address customer;
         uint256 customer_id;
         address wallet_address;
         mapping(uint256=>bool)chkcust;
    }
    enum MilestoneStatus {
         proposedMilestone,
         paymentToContract,
         Milestone_Completed,
         Milestone_inCompleted,
         Approveforcompltion,
         disApproveforcompltion,
          Approveforprocess,
         disApproveforprocess,
         projectcomplete,
         projectIncomplete,
         Re_do,
         aftertime_pay,
         NoResponseByserviceprovider,
         NoResponseBycustomer,
         NoResponseByAdmin
    }
    uint256 v;
    uint256[] caterandom;
    uint256[] temprandom;

   
    uint256[] cust_aray;
    uint256[] serve_aray;
    uint256[] mainID;
    bool fundTransferTocontract= false;
    bool fundTransferToServiceprovider=false;
    mapping(uint256=>Milestone) milestonee1;
    mapping(uint256=>Milestone) milestonee2;
    mapping(uint256=>Contract ) Contract1;
    mapping(uint256=> Contract) Contract2;
    mapping(uint256=>Template ) template;
    mapping(uint256=>Template ) template1;
    mapping(uint256=>service_Provider)serviceprovide1;
    mapping(uint256 =>customer_info)customer2;
    mapping(uint256=>category)Category;
    function setcustomer_info(bytes32 _fname,bytes32 _lname,bytes32 _email,bytes32 _password, uint256 _phone_no,address wallet)
    {
         customer_info memory customer1;
         bytes32 ran=keccak256(uint256(keccak256(now)),msg.sender);
         uint256 cust_random=uint256(ran);
         customer1.fname=_fname;
         customer1.lname=_lname;
         customer1.email=_email;
         customer1.password=_password;
         customer1.phone_no=_phone_no;
         customer1.wallet_address=wallet;
         customer1.customer=msg.sender;
         customer1.customer_id=cust_random;
         customer2[cust_random]=customer1;
         cust_aray.push(cust_random );
         customer2[cust_random].chkcust[cust_random]=true;     
    }
 
    function getcustomer(uint256 custId) constant returns(bytes32,bytes32,bytes32,bytes32,uint256,address,uint256){
            if( customer2[custId].chkcust[custId]==true){
            return (customer2[custId].fname,customer2[custId].lname,customer2[custId].email,customer2[custId].password,customer2[custId].phone_no,customer2[custId].customer,customer2[custId].customer_id);
            }
    }
    function getcustomer_info() constant returns(uint256[]){
             return(cust_aray); }
  
     function setcategory(bytes32 _cate_type,uint256 maincate_id,bool _status)
   {
             if(msg.sender==Admin)
             {
                 uint256 random = uint256(sha3(block.timestamp))+1;
                 caterandom.push(random);
                 Category[random].category_type=_cate_type;
                 Category[random].category_id=random;
                 Category[random].status=_status;
                 Category[random].cate_mainId=maincate_id;
                 Category[random].chkcate[random]=true;
             }
    }
     function getcategory()  constant returns(uint256[]){
   
         return (caterandom);
    }
     function getcategoryBycateId(uint256 cateId)  constant returns(uint256,bytes32,bool,uint256){
            if( Category[cateId].chkcate[cateId]==true)
            {
                 return (Category[cateId].category_id,Category[cateId].category_type,Category[cateId].status,Category[cateId].cate_mainId);
            }
    }
 
    function setServiceProvider(bytes32 _fname,bytes32 _lname,bytes32 _email,bytes32 _password,uint256 _phone_no,address wallet)
    {
           
                  service_Provider memory s_Provider;
                  bytes32 ran=keccak256(uint256(keccak256(now)),msg.sender);
                  uint256 random=uint256(ran);
                  s_Provider.fname1=_fname;
                  s_Provider.lname1=_lname;
                  s_Provider.email1=_email;
                  s_Provider.password1=_password;
                  s_Provider.phone_no1=_phone_no;
                  s_Provider.wallet_address=wallet;
                  s_Provider.serviceprovider=msg.sender;
                  s_Provider.serviceProvider_id=random;
                  serviceprovide1[random]=s_Provider;
                  serve_aray.push(random);
                  serviceprovide1[random].chkserv[random]=true;
             
    }
    function getServiveProvider(uint256 servID) constant returns(bytes32,bytes32,bytes32,bytes32,uint256,address,uint256)
    {
        if( serviceprovide1[servID].chkserv[servID]==true){
        return(serviceprovide1[servID].fname1,serviceprovide1[servID].lname1,serviceprovide1[servID].email1,serviceprovide1[servID].password1,serviceprovide1[servID].phone_no1,serviceprovide1[servID].serviceprovider,serviceprovide1[servID].serviceProvider_id);
        }
    }
    function getserviceprovider()  constant returns(uint256[]){
   
         return (serve_aray);
    }
  function set_Template(bytes32 _name,bytes32 _description,bool _status,uint256 _category_id)
    {
       
             if( Category[_category_id].chkcate[_category_id]==true && msg.sender==Admin)
             {
                Template memory temp;
                bytes32 ran1=keccak256(uint256(keccak256(now)),msg.sender);
                uint256 ran=uint256(ran1);
                temp.name=_name;
                temp.description1=_description;
                temp.status=_status;
                temp.category_id=_category_id;
                temp.temp_id=ran;
                mainID.push(temp.temp_id);
                template[_category_id]=temp;
                Category[_category_id].temp_list.push(ran);
                template1[ran]=temp;
                temprandom.push(ran);
                template1[ran].chkTemp[ran]=true;
            }
    }
    function gettemplate(uint256 cate_id) public constant
    returns (uint256[])
    {
          if(Category[cate_id].chkcate[cate_id]==true){
                      return(Category[cate_id].temp_list);
          }   
         
    }
    function gettemplateBytemp_id(uint256 temp) public constant returns (bytes32,bytes32,bool,uint256,uint256)
    {
             if(template1[temp].chkTemp[temp]==true)
             {
                return(template1[temp].name, template1[temp].description1, template1[temp].status, template1[temp].category_id,template1[temp].temp_id);
             }
    }
    function set_contract(uint256 _start_time,uint256 end_time,uint256 _price,uint256 temp,uint256 cust,uint256 serv,bytes32[] typee,bytes32[] valuee)    {
          if(template1[temp].chkTemp[temp]==true){
                  Contract memory cont;
                  bytes32 ran=keccak256(uint256(keccak256(now)),msg.sender);
                  uint256 _conId=uint256(ran);
                  cont.setserv_provider=serviceprovide1[serv].serviceprovider;
                  cont.start_time=_start_time;
                  cont.end_time=end_time;
                  cont.price=_price;
                  cont.service_type=temp;
                  if(customer2[cust].chkcust[cust]==true){
                  cont.cust_id=cust;}
                  cont.setcustomer=customer2[cust].customer;
                  cont.deadline=0;
                  cont.set_admin=Admin;
                  cont.contract_ID=_conId;
                  Contract1[temp]=cont;
                  Contract2[_conId]=cont;
                  template1[temp].contract_id.push(_conId);
                  Contract2[_conId].chkcont[_conId]=true;
              }
              set_randomfield(typee,valuee,_conId);
              if(serviceprovide1[serv].chkserv[serv]==true) {
                  Contract1[temp].setserv_provider=serviceprovide1[serv].serviceprovider;
                }
    }
    function set_randomfield(bytes32[] _typee,bytes32[] _value,uint256 _conId) internal
    {
        if( Contract2[_conId].chkcont[_conId]==true){
        for(uint256 i=0;i<_typee.length;i++)
        {
            Contract2[_conId].field_type=_typee[i];
            Contract2[_conId].field_value=_value[i];
        }
        }
    }
    function getcontractBytemp_id(uint256 temp) public constant
    returns (uint256[])
    {
            if(template1[temp].chkTemp[temp]==true)
            {
              return( template1[temp].contract_id);
            }
     
    }
    function getcontractBycont_id(uint256 cont_id) public constant
    returns (uint256,uint256,uint256,uint256,uint256)
    {
     
            if(Contract2[cont_id].chkcont[cont_id]==true)
            {
   
            return(Contract2[cont_id].start_time,Contract2[cont_id].end_time,Contract2[cont_id].price,Contract2[cont_id].service_type,Contract2[cont_id].contract_ID);
            }
     
    }
      function setMilestones(bytes32[] _name,uint256 cont_id,uint256[] _fees,uint256[] _penalty,uint256[] _start_date,uint256[] _end_date,uint256[] _price)
    {
                        if(Contract2[cont_id].chkcont[cont_id]==true){
                          for(uint256 n=0;n<_name.length;n++){
                            Milestone memory mile;
                          bytes32 ran=keccak256(uint256(keccak256(now)),msg.sender,n);
                          uint256 ran1=uint256(ran);
                            mile.name=_name[n];
                            mile.fees=_fees[n];
                            mile.penalty=_penalty[n];
                            mile.start_date=_start_date[n];
                            mile.end_date=_end_date[n];
                            mile.price=_price[n];
                            mile.mainID = Contract2[cont_id].contract_ID;
                            mile.milestone_id=ran1;
                            mile .deadline1=0;
                            mile.deadline2=0;
                            mile.deadline3=0;
                            milestonee1[cont_id]=mile;
                            milestonee2[ran1]=mile;
                            Contract2[cont_id].miles_milestone_id.push(ran1);
                            milestonee1[Contract2[cont_id].contract_ID].status= MilestoneStatus.proposedMilestone;
                            milestonee2[ran1].status= MilestoneStatus.proposedMilestone;
                            milestonee2[ran1].chkmile[ran1]=true;
                        }
                        }
    }
    function getMilestonesByCon_id(uint256 cont_id) public constant
    returns (uint256[])
    {
            if(Contract2[cont_id].chkcont[cont_id]==true)
            {
               return(Contract2[cont_id].miles_milestone_id);
            }
     }
    function getMilestonesBymile_id(uint256 _mId) public constant
    returns (bytes32,uint256,uint256,uint256,uint256,uint256,uint256)
    {
  
            if( milestonee2[_mId].chkmile[_mId]==true)
            {
                 return(milestonee2[_mId].name,milestonee2[_mId].fees,milestonee2[_mId].penalty,
                 milestonee2[_mId].end_date,milestonee2[_mId].price,
                 milestonee2[_mId].mainID,milestonee2[_mId].milestone_id);
            }
    }
    function check_status(uint256 m_id)  constant returns(MilestoneStatus)
    {
   
            if(m_id==milestonee2[m_id].milestone_id)
            {
                return milestonee2[m_id].status;
            }
   
    }
    function disApproveByCustomer(uint256 m_id){
        
             
                     milestonee2[m_id].status= MilestoneStatus.disApproveforprocess;
                
        
    }
    function update_milestone(uint256 m_id,uint256 _start_date,uint256 _end_date,uint256 price){
        if(milestonee2[m_id].status==MilestoneStatus.disApproveforprocess||milestonee2[m_id].status==MilestoneStatus.Re_do){
              milestonee2[m_id].start_date=_start_date;
               milestonee2[m_id].end_date=_end_date;
              milestonee2[m_id].price=price;
        }
    }
    
    event c (uint256);
    event d (address);
     function paymentToContract(uint256 m_id) payable
    {
 
                    
                      v=(msg.value/1 ether);
                           c(v);
                          c(milestonee2[m_id].price);
                          d(msg.sender);
                          d(Contract2[milestonee2[m_id].mainID].setcustomer);
                      
                     
                          
                            milestonee2[m_id].status= MilestoneStatus.Approveforprocess;
                            milestonee2[m_id].deadline1= (now+milestonee2[m_id].end_date* 1 minutes);
                            Contract2[milestonee2[m_id].mainID].deadline=
                            (Contract2[milestonee2[m_id].mainID].deadline+milestonee2[m_id].deadline1);
                            fundTransferTocontract= true;
                      
                   
   
    }
    function markMilestoneComplete(uint _idMilestone)
    {
                
                       if(milestonee2[_idMilestone].deadline1>=now&&
                        msg.sender==Contract2[milestonee2[_idMilestone].mainID].setserv_provider){
                        milestonee2[_idMilestone].status= MilestoneStatus.Milestone_Completed;
                        milestonee2[_idMilestone].deadline2=now+20 * 1 minutes;
                 
                        }
                    //   else
                    //   {
                    //      milestonee2[_idMilestone].status= MilestoneStatus.Milestone_inCompleted;
                    //      milestonee2[_idMilestone].deadline3=now + 3 minutes * 1 minutes;
                    //     }
                  
    }
 
    function DissAproveByCustomer(uint256 _idMilestone)
    {
        if(milestonee2[_idMilestone].status==MilestoneStatus.Milestone_Completed&&milestonee2[_idMilestone].deadline2>=now)
        {
            milestonee2[_idMilestone].status=MilestoneStatus.disApproveforcompltion;
            milestonee2[_idMilestone].deadline3=now + 30 minutes * 1 minutes;
        }
 
    
 
    }
    
   
    function ApproveByCustomer(uint256 _idMilestone)
    {
        c(milestonee2[_idMilestone].price);
        c(milestonee2[_idMilestone].price * 1 ether);
        if(milestonee2[_idMilestone].status==MilestoneStatus.Milestone_Completed&&milestonee2[_idMilestone].deadline2>=now)
        {
            (Contract2[milestonee2[_idMilestone].mainID]. setserv_provider).transfer(milestonee2[_idMilestone].price * 1 ether);
            milestonee2[_idMilestone].status=MilestoneStatus.Approveforcompltion;
            fundTransferToServiceprovider=true;
        }
        else
        {
            milestonee2[_idMilestone].status=MilestoneStatus.disApproveforcompltion;
            milestonee2[_idMilestone].deadline3=now + 30 minutes * 1 minutes;
        }
 
    
 
    }
    
    function checkFailure(uint256 _idMilestone,uint256 graseTime){
        if((milestonee2[_idMilestone].status== MilestoneStatus.Milestone_inCompleted||milestonee2[_idMilestone].status== MilestoneStatus.disApproveforcompltion)&&now<=milestonee2[_idMilestone].deadline3)
        {
          milestonee2[_idMilestone].deadline1=now+milestonee2[_idMilestone].deadline1+graseTime * 1 minutes;
          milestonee2[_idMilestone].status= MilestoneStatus.Re_do;
          milestonee2[_idMilestone].price=milestonee2[_idMilestone].price-(milestonee2[_idMilestone].penalty*milestonee2[_idMilestone].price/100);
         }
        else
        if(msg.sender==Contract2[milestonee2[_idMilestone].mainID]. setserv_provider&&milestonee2[_idMilestone].status== MilestoneStatus.disApproveforcompltion&&now<=milestonee2[_idMilestone].deadline3)
        {
            (Contract2[milestonee2[_idMilestone].mainID].setserv_provider).transfer(milestonee2[_idMilestone].price);
            milestonee2[_idMilestone].status= MilestoneStatus.aftertime_pay;
        }
  
    }
}
