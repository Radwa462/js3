var nods =[
    {
     nod: "Oh, Charlotte. This old bird may be slow when it comes to moving around these days, but the kitty that rests between my legs is still feral like a jungle cat.",
     test: "Harlow James, Never Say Never" ,
    },
    {
        nod: "When you go from fearing your mother to feeling sorry for her, it usually means you’ve travelled a long way toward recovery.",
        test: "Catherine Gildiner, Good Morning, Monster: A Therapist Shares Five Heroic Stories of Emotional Recovery",
    },
    {
        nod: "Anger is a defense, not a feeling, ....analyze what feeling the anger was covering.",
        test: "Catherine Gildiner, Good Morning Monster",
    },
    {
       nod:"All animals are equal, but some animals are more equal than others.",
       test:"George Orwell, Animal Farm",
    },
    {
        nod:"If we uphold our journalistic integrity, we can navigate the challenging balance between being trusted informants and influencers with the power of the media. Is it not our first aim to avoid eroding public trust and violating ethical standards? ",
        test:"Erik Pevernagie",
     },
     {
        nod:"unconscious never cares for the facts.",
        test:"Catherine Gildiner, Good Morning, Monster: A Therapist Shares Five Heroic Stories of Emotional Recovery",
     },
     {
        nod:"Perhaps one did not want to be loved so much as to be understood.",
        test:"Perhaps one did not want to be loved so much as to be understood.",
     },
     {
        nod:"Outplacement should give us the glow of a lighthouse, and the outplacer must bring the joy of the bluebirds, the humming of the bumblebees, and a buzz of excitement back into our lives.",
        test:"Erik Pevernagie",
     },

];

console.log(nods);

var holder ="";
function generate() {
    for(var i = 0; i< nods.length; i++ ){
        var random = Math.floor(Math.random() * 6) + 0;

        holder = `  <div class=" ">
        <h2> ${nods[random].nod}</h2>
        <p> ~ ${nods[random].test} ~ </p>
        </div>`;

        document.getElementById("demo").innerHTML =  holder;
    }
}
console.log(holder);