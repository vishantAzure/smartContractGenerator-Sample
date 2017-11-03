pragma solidity^0.4.11;
contract MileStoneTracker{
    address Central_Admin;
    address customer;
    address serviceprovider;
    address  onlyowner;
    uint256 deadline;
    uint256 deadline2;
    
    function MileStoneTracker()
    {
        Central_Admin=msg.sender;
    }
    
    struct Milestone {
         uint256 timeinMinutes;
         uint256 price;
         bytes32 service_type;
         bool stats;
         MilestoneStatus status;
         uint256 start_time;
         uint256 end_time;
         uint256 doneTime;
         bytes payData;
         bytes32 milestone_id;
         address setcustomer;
         address setserv_provider;
         address set_admin;
         uint256 deadline;
         uint256 deadline2;
    }
    struct Template{
         bytes32 template_type;
         uint256 template_id;
    }
     
    struct service_Provider
    {
         bytes32 name;
         bytes32 service_type;
         uint256 phone_no;
         address serviceprovider;
         uint256 serviceProvider_id;
    }
    struct customer_info
    {
         bytes32 name;
         uint256 custservice_type;
         uint256 phone_no;
         address customer;
         uint256 customer_id; 
    }

    enum MilestoneStatus {
         start,
         proposedMilestone, 
         AcceptedAndInProgress,
         Completed,
         NotCompletedInTime,
         Done,
         ApprovedByCustomer,
         DisApprovedByCustomer,
         incomplete,
         reject,
         Re_do,
         PayDoneByCustomer,
         PayNotDoneByCustomer,
         approvedByCustomer
    }
    uint256[] b1;
    bytes32[] c1;
    uint256 v;
    uint256 problem_option;
    uint256 start_time;
    uint256 transfer_time;
    uint256 pay_time;
    uint256 dead_time;
    bool d;
    bytes32[] mile_aray;   
    uint256[] serve_aray;   
    uint256[] cust_aray;   
    uint256[] reqmile_array; 
    
    
    bytes32[] temprandom;
    bytes32[] temp_type;
  
    uint256[] miles_time;
    uint256[] miles_price;
    bytes32[] miles_service_type;
    bytes32[] miles_milestone_id;
    address[] customer3;
    address[] serviceProvider3;
    address[] admin3;
    uint256[] dead;
    
    bytes32[]   serv_name;
    uint256[]   serv_type;
    uint256[]   serv_phoneno;
    address[]   serv_serviceprovider;
    uint256[]   serv_id;
    
    bytes32[]   serv_name1;
    uint256[]   serv_type1;
    uint256[]   serv_phoneno1;
    address[]   serv_serviceprovider1;
    uint256[]   serv_id1;
    
    bytes32[] cust_name;
    uint256[] cust_servtype;
    uint256[] cust_phone_no;
    address[] cust_customer;
    uint256[] cust_customerid;

    bytes32[] cust_name1;
    uint256[] cust_servtype1;
    uint256[] cust_phone_no1;
    address[] cust_customer1;
    uint256[] cust_customerid1;
    
    uint256[] totalwork;
    uint256[] reqmilestoneid;
    uint256[] reqservtype;

    uint256 deadline1;
    
    uint256[] milestondoneTime;
    bool public rejected=false; 
    bool public campaignCanceled;
    bool public changingMilestones;
    bytes public proposedMilestones;
    bool fundTransfer= false;
    mapping(address=>Milestone) milestones;
    mapping(bytes32=>Milestone) milestonee1;
    mapping(bytes32=>Milestone) milestonee2;
    mapping(uint256 => uint256) balances;
    mapping(uint256=>string) template_type1;
    mapping(address=>service_Provider)serviceprovide;
    mapping(uint256=>service_Provider)serviceprovide1;
    mapping(address =>customer_info)customerr;
    mapping(uint256 =>customer_info)customer2;
    mapping(uint256=>Template)template;
    modifier onlyserviceprovider(){if(msg.sender!=serviceprovider) revert();_;}
    modifier onlyAdmin(){if(msg.sender!=Central_Admin) revert();_;}
    modifier onlyCustomer(){if(msg.sender!=customer) revert();_;}
    modifier notChanging { if (changingMilestones) revert(); _; }
    modifier campaignNotCanceled { if (campaignCanceled) revert(); _; }
    function customerr1()
    {
        customer=msg.sender;
    }
    function serviceprovider1()
    {
        serviceprovider=msg.sender;
    }

    event chk(bool);
    event  chkk(bool);
    event Transfer(address from, address to, uint256 value);
    event NewMilestoneListProposed();
    event NewMilestoneListUnproposed();
    event NewMilestoneListAccepted();
    event ProposalStatusChanged(bytes32 idProposal, MilestoneStatus newProposal);
    event CampaignCanceled();
    event check (uint256 a);
    event check10 (bytes32 a);
    event check1 (bool a);
    event check2 (address a);
    event NewMilestoneListProposed();
    event NewMilestoneListUnproposed();
    event NewMilestoneListAccepted();
    event ProposalStatusChanged(uint idProposal, MilestoneStatus newProposal);
    event CampaignCanceled();
    event chek(MilestoneStatus);
    
    function setTemplates(bytes32 _template_type) 
    {
        bytes32 temp_random = sha3(block.timestamp);
        temprandom.push(temp_random);
        temp_type.push(_template_type);
    }

    function getTemplate()  constant returns(bytes32[],bytes32[])
    {
         return (temprandom,temp_type); 
    }

    function setMilestones(uint256 _timeinMinutes,uint256 _price, bytes32 _tempId) returns(uint256,bytes32)
    {
        Milestone memory mile;
        bytes32 random = sha3(block.timestamp);
        mile.timeinMinutes=_timeinMinutes;
        mile.price=_price; 
        mile.service_type=_tempId;
        mile.stats=false;  
        mile.milestone_id=random;
        milestonee1[_tempId]=mile;
        milestonee2[random]=mile;
        mile_aray.push(random);
        start_time=now * 1 minutes;
        miles_time.push(_timeinMinutes);
        miles_price.push(_price);
        miles_service_type.push(_tempId);
        miles_milestone_id.push(random);
        
        milestonee1[_tempId].status= MilestoneStatus.proposedMilestone;
        milestonee2[random].status= MilestoneStatus.proposedMilestone;
        chek(milestonee1[_tempId].status);
        chek(milestonee2[random].status);
        return(milestonee1[_tempId].timeinMinutes,random);    

    }
    
    
    function getMilestonesByTemp_id(bytes32 _tempId) public constant returns (uint256[],uint256[],bytes32[],bytes32[],MilestoneStatus,uint256[]) 
    {
        for(uint256 a=0;a<temprandom.length;a++)
        {
            if(_tempId == temprandom[a])
            {
            check10(temprandom[a]);
            return(miles_time,miles_price,miles_service_type,miles_milestone_id,milestonee1[_tempId].status,dead);
            }
        }
    }

    function getMilestonesByMile_id(bytes32 m_id) public constant returns (uint256,uint256,bytes32,MilestoneStatus,MilestoneStatus,address,address,address,uint256) {
        for(uint256 k=0;k<miles_milestone_id.length;k++)
        {
            if(miles_milestone_id[k] == m_id)
            {
                bytes32 x = m_id;
                return(miles_time[k],miles_price[k],miles_service_type[k],milestonee1[x].status,milestonee2[x].status,customer3[k],serviceProvider3[k],admin3[k],dead[k]);
           }
        }
    }  

    function set_customer(address cust,bytes32 m_id)
    {
        
        for(uint256 k=0;k<miles_milestone_id.length;k++)
        {
            if(miles_milestone_id[k] == m_id)
            {
                check10(miles_milestone_id[k]);
                milestonee1[m_id].setcustomer=cust;
                check2(milestonee1[m_id].setcustomer);
                customer3.push(milestonee1[m_id].setcustomer);
            }
            check2(milestonee1[m_id].setcustomer);
        }
    }
    
    function set_ServiceProvider (address serviceProvider,bytes32 m_id)
    {
        for(uint256 k=0;k<miles_milestone_id.length;k++)
        {
            if(miles_milestone_id[k] == m_id)
            {
                milestonee1[m_id].setserv_provider = serviceProvider;
                serviceProvider3.push(milestonee1[m_id].setserv_provider);
            }
            check2(milestonee1[m_id].setserv_provider);
            check2(milestonee2[m_id].setserv_provider);
        }
    }
    
    function set_Admin (address admin,bytes32 m_id)
    { 
        for(uint256 k=0;k<miles_milestone_id.length;k++)
        {
            if(miles_milestone_id[k] == m_id)
            {
                milestonee1[m_id].set_admin = admin;
                admin3.push(milestonee1[m_id].set_admin);
            }
            check2(milestonee1[m_id].set_admin);
            check2(milestonee2[m_id].set_admin);
        }
    }
    
    function check_Payment(bytes32 m_id,uint256 val) payable  returns(MilestoneStatus,MilestoneStatus)
    {
        Milestone memory mile;
        check(msg.value);
        check(msg.value/1 ether);
        check(milestonee2[m_id].price);
        check2(msg.sender);
        check2(milestonee1[m_id].setcustomer);
        check(milestonee2[m_id].timeinMinutes);
        uint256 amount = val;
        for(uint256 k=0;k<miles_milestone_id.length;k++)
        {
            if( amount == milestonee2[m_id].price &&msg.sender == milestonee1[m_id].setcustomer && miles_milestone_id[k] == m_id) 
            {
                milestonee1[m_id].status= MilestoneStatus.AcceptedAndInProgress;
                milestonee2[m_id].status= MilestoneStatus.AcceptedAndInProgress;
                chek(milestonee1[m_id].status);
                chek(milestonee2[m_id].status);
                check10(miles_milestone_id[k]);
                check(1234);
                check10(miles_milestone_id[k]);
                check(milestonee2[m_id].timeinMinutes);
                check(miles_time[k]);
                deadline1= now + milestonee2[m_id].timeinMinutes * 1 minutes;
                mile.deadline = deadline1;
                milestonee1[m_id]=mile;
                check(now);
                dead.push(deadline1);
                check(deadline1);
                
            }
        }
        return(milestonee1[m_id].status,milestonee2[m_id].status);
    }
    
    function check_status(bytes32 m_id) constant returns(MilestoneStatus,MilestoneStatus)
    {
        for(uint256 i=0;i<miles_milestone_id.length;i++)
        {
            if(miles_milestone_id[i] == m_id)
            {
                chek(milestonee1[m_id].status);
                chek(milestonee2[m_id].status);
                   
            }
        }
        return (milestonee1[m_id].status,milestonee2[m_id].status);
    }
    
    function markMilestoneComplete(bytes32 _idMilestone)   returns (MilestoneStatus,MilestoneStatus)
    {
        for(uint256 b=0;b<miles_milestone_id.length;b++)
        {
            if(msg.sender == serviceProvider3[b])
            {
                check(now); 
                check( milestonee1[_idMilestone].deadline);
                check(deadline1);
                check2(serviceProvider3[b]);
                check10(milestonee1[_idMilestone].milestone_id);
                check10(miles_milestone_id[b]);
                if(_idMilestone==miles_milestone_id[b] && msg.sender == serviceProvider3[b] && deadline1 >= now)
                {
                    chek(milestonee1[_idMilestone].status);
                    chek(milestonee2[_idMilestone].status);
                    milestonee1[_idMilestone].status = MilestoneStatus.Completed;
                    milestonee2[_idMilestone].status = MilestoneStatus.Completed;
                    chek(milestonee1[_idMilestone].status);
                    chek(milestonee2[_idMilestone].status);
                    milestonee1[_idMilestone].stats=true;
                    chk(milestonee1[_idMilestone].stats);
                    ProposalStatusChanged(_idMilestone, milestonee1[_idMilestone].status);
                    deadline2 = now + 3 * 1 minutes;
                    check(deadline2);
                }
                else
                {
                    milestonee1[_idMilestone].status = MilestoneStatus.NotCompletedInTime;
                    milestonee2[_idMilestone].status = MilestoneStatus.NotCompletedInTime;
                    chek(milestonee1[_idMilestone].status);
                    chek(milestonee2[_idMilestone].status);
                    fundTransfer == false;
                }   
            }
            
        }
    return (milestonee1[_idMilestone].status,milestonee2[_idMilestone].status);
    }
    
    function approveByCustomer(bytes32 m_id) returns(bool,MilestoneStatus,MilestoneStatus) 
    {
        for(uint256 b=0;b<miles_milestone_id.length;b++)
        {
            if(miles_milestone_id[b]==m_id && milestonee1[m_id].status ==  MilestoneStatus.Completed && msg.sender == customer3[b] && deadline2>=now)
            {
                check10(miles_milestone_id[b]);
                chek(milestonee1[m_id].status);
                check2(customer3[b]);
                check2(serviceProvider3[b]);
                check(miles_price[b]);
                address a = serviceProvider3[b];
                check2(a);
                uint c = miles_price[b] * 1 ether;
                check(b);
                a.transfer(c);
                milestonee1[m_id].status = MilestoneStatus.PayDoneByCustomer;
                milestonee2[m_id].status = MilestoneStatus.PayDoneByCustomer;
                fundTransfer == true;
                chek(milestonee1[m_id].status);
                chek(milestonee2[m_id].status);
                check(123456);
            }
            else
            {
                milestonee1[m_id].status = MilestoneStatus.PayNotDoneByCustomer;
                milestonee2[m_id].status = MilestoneStatus.PayNotDoneByCustomer;
                fundTransfer == false;
                chek(milestonee1[m_id].status);
                chek(milestonee2[m_id].status);
                check(121212);
            }
        }
        return(fundTransfer,milestonee1[m_id].status,milestonee2[m_id].status);
    }    
    
    function checkfailure(uint256 grasetime,bytes32 miles_id)  returns(MilestoneStatus n)
    {
        Milestone memory mile;
        
        for(uint256 b=0;b<miles_milestone_id.length;b++)
        {
            if(miles_milestone_id[b]==miles_id && msg.sender == admin3[b] && milestonee1[miles_id].status ==  MilestoneStatus.NotCompletedInTime)
            {
                check2(admin3[b]);
                check10(miles_milestone_id[b]);
                chek(milestonee1[miles_id].status);
                check(deadline1);
                deadline1 = now+grasetime*1 minutes;
                mile.deadline = deadline1;
                check(milestonee1[miles_id].deadline);
                milestones[msg.sender].status = MilestoneStatus.Re_do;
                milestonee1[miles_id].status= MilestoneStatus.Re_do;
                milestonee2[miles_id].status= MilestoneStatus.Re_do;
                check(now);
                check(deadline1);
                chek(milestonee1[miles_id].status);
                chek(milestonee2[miles_id].status);
                chek(milestones[msg.sender].status);
                markMilestoneComplete(miles_id);
            }
            else 
            {
                if(miles_milestone_id[b]==miles_id && msg.sender == admin3[b] && milestonee1[miles_id].status ==  MilestoneStatus.PayNotDoneByCustomer)
                {
                    address a = serviceProvider3[b];
                    check2(a);
                    uint c = miles_price[b] * 1 ether;
                    check(b);
                    a.transfer(c);
                }
            }
            
        }
        return milestones[msg.sender].status ;
    }
}   