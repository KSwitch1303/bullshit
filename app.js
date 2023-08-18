let namee = ["Blessing","John","Esther","Joy","Emmanuel","Mary","Ebi","Grace","Mercy","Sunday","Samuel","Faith","Joseph","Peter","Daniel","James","Gift","David","Victoria","Rose","Ruth","Patience","Victor","Lucky","Rita","Moses","Helen","Stella","Beauty","Preye","Sarah","Elizabeth","Gloria","Timi","Paul","Friday","Solomon","Doris","Charity","Juliet","Tari","Favour","Glory","Happiness","Comfort","Godwin","Justina","Felicia","Precious","Rebecca","Felix","Michael","Stephen","Monday","Christiana","Roseline","Florence","Prince","Evelyn","Francis","Samson","Anthony","Peace","Kingsley","Isaac","Godgift","Ebiere","Deborah","Christopher","Vivian","Queen","Jacob","Tina","Endurance","Joshua","Johnson","Musa","Hannah","Alice","Henry","Wisdom","Christian","Thankgod","Janet","Micheal","Bright","Eunice","Patrick","Maria","Richard","Promise","Frank","Hope","Godspower","Love","Gabriel","George","Patricia","Abraham","Diepreye","Regina","Kenneth","Timipre","Stanley","Pere","Benjamin","Dorcas","Edith","Charles","Kelvin","Clement","Goodluck","Akpos","Andrew","Rosemary","Beatrice","Ibrahim","Josephine","Augustine","Philip","Jonathan","Ngozi","Gladys","Innocent","Jennifer","Emeka","Martha","Tonye","Seiyefa","Kate","Mohammed","Godbless","Ebitimi","Suoyo","Hellen","Ueen","Vincent","Dennis","Simon","Ada","Caroline","Ezekiel","Matthew","Happy","Julius","Alex","Emomotimi","Ebimene","Veronica","Cynthia","Collins","Ebiye","Amos","Jeremiah","Mabel","Mark","Mathew","Jane","Nelson","Lawrence","Flora","Festus","Racheal","Agnes","Sunny","Nancy","Chinedu","Angela","Princess","Joel","Joyce","Ifeanyi","Anita","Vero","Tony","Naomi","Alfred","Rachael","Loveth","Lilian","Abubakar","Bridget","Abigail","Benson","Jude","Chioma","Lucy","Ben","Sandra","Isaiah","Chinyere","Inatimi","Wilson","Monica","Eric","Ikechukwu","Williams","Adamu","Jonah","Blessing","John","Esther","Joy","Emmanuel","Mary","Ebi","Grace","Mercy","Sunday","Samuel","Faith","Joseph","Peter","Daniel","James","Gift","David","Victoria","Rose","Ruth","Patience","Victor","Lucky","Rita","Moses","Helen","Stella","Beauty","Preye","Sarah","Elizabeth","Gloria","Timi","Paul","Friday","Solomon","Doris","Charity","Juliet","Tari","Favour","Glory","Happiness","Comfort","Godwin","Justina","Felicia","Precious","Rebecca","Felix","Michael","Stephen","Monday","Christiana","Roseline","Florence","Prince","Evelyn","Francis","Samson","Anthony","Peace","Kingsley","Isaac","Godgift","Ebiere","Deborah","Christopher","Vivian","Queen","Jacob","Tina","Endurance","Joshua","Johnson","Musa","Hannah","Alice","Henry","Wisdom","Christian","Thankgod","Janet","Micheal","Bright","Eunice","Patrick","Maria","Richard","Promise","Frank","Hope","Godspower","Love","Gabriel","George","Patricia","Abraham","Diepreye","Regina","Kenneth","Timipre","Stanley","Pere","Benjamin","Dorcas","Edith","Charles","Kelvin","Clement","Goodluck","Akpos","Andrew","Rosemary","Beatrice","Ibrahim","Josephine","Augustine","Philip","Jonathan","Ngozi","Gladys","Innocent","Jennifer","Emeka","Martha","Tonye","Seiyefa","Kate","Mohammed","Godbless","Ebitimi","Suoyo","Hellen","Ueen","Vincent","Dennis","Simon","Ada","Caroline","Ezekiel","Matthew","Happy","Julius","Alex","Emomotimi","Ebimene","Veronica","Cynthia","Collins","Ebiye","Amos","Jeremiah","Mabel","Mark","Mathew","Jane","Nelson","Lawrence","Flora","Festus","Racheal","Agnes","Sunny","Nancy","Chinedu","Angela","Princess","Joel","Joyce","Ifeanyi","Anita","Vero","Tony","Naomi","Alfred","Rachael","Loveth","Lilian","Abubakar","Bridget","Abigail","Benson","Jude","Chioma","Lucy","Ben","Sandra","Isaiah","Chinyere","Inatimi","Wilson","Monica","Eric","Ikechukwu","Williams","Adamu","Jonah"]
let surname = ["John","Sunday","James","Samuel","Peter","Joseph","Emmanuel","David","Daniel","Moses","George","Johnson","Solomon","Jacob","Paul","Isaac","Friday","Victor","Francis","Amos","Monday","Benson","Okoro","Frank","Lucky","Ezekiel","Samson","Jonah","Mark","Michael","Musa","Stephen","Anthony","Abraham","Jonathan","Thomas","Godwin","Akpan","Nelson","Clement","Dickson","Alfred","Richard","Ebi","Gabriel","Wilson","Williams","Joel","Andrew","Eze","Joshua","Micheal","Jackson","Matthew","Isaiah","Mohammed","Amadi","Benjamin","Felix","Patrick","Philip","Obi","Robert","Ben","Mathew","Simon","Jeremiah","Christopher","Ibrahim","Okon","Osain","Igwe","Charles","Sani","Festus","Owei","Adamu","Julius","Abel","Edward","Egba","Okafor","Ogbara","Young","Ali","Thompson","Douglas","Simeon","Albert","Alex","Abubakar","Job","Otobo","Chukwu","Augustine","Josiah","Usman","Thankgod","Godspower","Olali","Gilbert","Aaron","Appah","Vincent","Dick","Rufus","Sam","Dennis","Okeke","Abdullahi","Preye","Goodluck","Okoye","Stanley","Eke","Pere","Robinson","Nathan","Egbo","Opuene","Lawrence","Alagoa","Udoh","Pius","Timi","Olotu","Okorie","Nwachukwu","Amakiri","Famous","Egbe","Elijah","Godwill","Obiene","Tom","Brown","Collins","Ogidi","Saturday","Udo","Dressman","Alabo","Maxwell","Wisdom","Tonye","Agala","Koko","Sambo","Bassey","Sampson","Theophilus","Tari","Agada","Lambert","Walter","Reuben","Timothy","Odogu","Johnny","Fred","Micah","Yusuf","Sese","Titus","William","Allen","Allison","Obele","Henry","Nwankwo","Ogbonna","Akpos"]
let numberPrefix = ['081','080','070','090']
let x
let y
let checker = []
const fs = require('fs');
do {
  x = Math.floor((Math.random() * numberPrefix.length) + 1);
  y = ''
  for (i = 0; i < 8; i++){
    y = y + Math.floor((Math.random() * 8) + 1)
  }
  if (checker.includes(`${numberPrefix[x-1]}${y}`)) {
    console.log("e dey");
    checker.push(`${numberPrefix[x-1]}${y}`);
    console.log(checker[checker.length-1]);
  }
  
}while (checker.length < 1200)


// do {
//   x = Math.floor((Math.random() * namee.length) + 1);
//   y = Math.floor((Math.random() * surname.length) + 1);
  
//   if (checker.includes(`${namee[x-1]}, ${surname[y-1]}`)) {
//     //console.log("e dey")
//   }else{
//     checker.push(`${namee[x-1]}, ${surname[y-1]}`);
//     //console.log(checker[checker.length-1])
//   fs.appendFile('output.txt', `${checker[checker.length-1]} \n`, err => {
//     if (err) console.error(err);
//    // else console.log('Data written to file successfully.');
//   });
//   }
  
// } while (checker.length < 1200)
// console.log(checker.length)
