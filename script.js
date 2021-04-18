var users=[
    {
        name:'Lucy',
        Age:18,
        gender:'F',
        hobby:'Reading',
        avatar:'avatar3.jpg'
    },
    {
        name:'Patrick',
        gender:'M',
        Age:20,
        hobby:'Swimming',
        avatar:'avatar1.jpg'
    },
    {
        name:'Mavis',
        gender:'F',
        Age:34,
        hobby:'Singing',
        avatar:'avatar6.jpg'
    },
    {
        name:'Michelle',
        gender:'F',
        Age:28,
        hobby:'Singing',
        avatar:'avatar5.jpg'
    }
    ,
    {
        name:'Christopher',
        gender:'M',
        Age:21,
        hobby:'Sports',
        avatar:'avatar2.jpg'
    },
    {
        name:'Ronald',
        gender:'M',
        Age:30,
        hobby:'music',
        avatar:'avatar4.jpg'
    }
];
window.addEventListener('load',function() {

    var results = document.getElementById('results');

    function search(){

        try{
            // Get hobby
        var hobbyField = document.getElementById('hobby');
        var hobby = hobbyField.value;

        //get Age range
        var minAge = document.getElementById('minAge').value;
        var maxAge = document.getElementById('maxAge').value;

        // Get gender
        var genderField = document.getElementById('gender');
        var s = genderField.selectedIndex;
        var _gender = genderField.options[s].value;

        var resulthtml = '';
        for(var x=0; x<users.length; x++)
        {
            if(minAge>=18 && maxAge<=50){
                if(users[x].Age>= minAge && users[x].Age<=maxAge){
                    if(_gender=='A' || _gender==users[x].gender){
                        if(hobby=="" || hobby==users[x].hobby){
                            resulthtml+=
                            '<div class="person-row">\
                                <img src="Images/'+users[x].avatar+ '" />\
                                <div class=Person-info">\
                                    <div>'+"Name:"+users[x].name+'</div>\
                                    <div>'+"Age:"+users[x].Age+'</div>\
                                    <div>'+"Hobby:"+users[x].hobby+'</div>'+
                                '</div>'+
                                '<button>Add as friend</button>'+
                            '</div>';
                        }
                    }
                }
            }
            else{
                results.innerHTML='';
                throw "invalid Age range! minimum Age:18 and Maximum Age:50";
            }

        }

            results.innerHTML=resulthtml;
        }
        catch(error){
            window.alert(error);
        }
    }
    var searchBtn=document.getElementById('searchbtn');
    searchBtn.addEventListener('click',search);
});