let currentMonth = new Date(2026, 9, 1);

const $ = (id) => document.getElementById(id);

function renderHours(){
  $("hoursList").innerHTML = SITE_DATA.hours.map(([day,time]) =>
    `<div class="hour-row"><span>${day}</span><strong>${time}</strong></div>`).join("");
  $("addressText").textContent = SITE_DATA.business.address;
  $("mapLink").href = SITE_DATA.business.mapUrl;
}

function renderSpecials(){
  $("specials").innerHTML = SITE_DATA.weeklySpecials.map((s,i) => `
    <article class="special ${s.day === "Friday" ? "featured" : ""}">
      <div class="day">${s.day.toUpperCase()}</div>
      <h4>${s.title}</h4>
      <p>${s.description}</p>
      ${s.price ? `<div class="price">${s.price}</div>` : ""}
    </article>`).join("");
}

function renderMenu(){
  $("menuList").innerHTML = SITE_DATA.menu.map(item => `
    <article class="menu-item">
      <span class="menu-price">${item.price || ""}</span>
      <h4>${item.name}</h4>
      <p>${item.description}</p>
    </article>`).join("");
}

function monthName(date){ return date.toLocaleString("en-US",{month:"long",year:"numeric"}); }

function renderCalendar(){
  const y=currentMonth.getFullYear(), m=currentMonth.getMonth();
  $("monthTitle").textContent=monthName(currentMonth);
  const first=new Date(y,m,1), start=(first.getDay()+6)%7;
  const days=new Date(y,m+1,0).getDate();
  const prevDays=new Date(y,m,0).getDate();
  const labels=["MON","TUE","WED","THU","FRI","SAT","SUN"];
  let out=labels.map(d=>`<div class="cal-label">${d}</div>`).join("");
  const events=SITE_DATA.events||[];
  for(let i=0;i<42;i++){
    const n=i-start+1;
    let d, cls="";
    if(n<1){d=prevDays+n;cls="other"}else if(n>days){d=n-days;cls="other"}else d=n;
    const iso=`${y}-${String(m+1).padStart(2,"0")}-${String(d).padStart(2,"0")}`;
    const dayEvents=events.filter(e=>e.date===iso);
    out+=`<div class="cal-day ${cls}"><div class="cal-num">${d}</div>${dayEvents.map(e=>`<span class="cal-event">${e.title}</span>`).join("")}</div>`;
  }
  $("calendar").innerHTML=out;

  const sorted=events.filter(e=>{
    const dt=new Date(e.date+"T12:00:00");
    return dt.getFullYear()===y && dt.getMonth()===m;
  }).sort((a,b)=>a.date.localeCompare(b.date));

  $("eventList").innerHTML=sorted.length ? sorted.map(e=>{
    const dt=new Date(e.date+"T12:00:00");
    return `<div class="event-row">
      <div class="event-date">${dt.toLocaleDateString("en-US",{month:"short",day:"numeric"})}</div>
      <div><strong>${e.title}</strong><small>${e.time||""}${e.details?" • "+e.details:""}</small></div>
      <div class="event-type">${e.type||"EVENT"}</div>
    </div>`;
  }).join("") : `<div class="event-row"><div></div><div><strong>No events added yet.</strong><small>Add your October events in <code>data.js</code>.</small></div><div></div></div>`;
}

$("prevMonth").addEventListener("click",()=>{currentMonth.setMonth(currentMonth.getMonth()-1);renderCalendar()});
$("nextMonth").addEventListener("click",()=>{currentMonth.setMonth(currentMonth.getMonth()+1);renderCalendar()});

const today=new Date();
$("bookingDate").min=today.toISOString().split("T")[0];
$("bookingDate").value=today.toISOString().split("T")[0];

$("bookBtn").addEventListener("click",()=>{
  if(SITE_DATA.business.bookingUrl){
    window.open(SITE_DATA.business.bookingUrl,"_blank","noopener");
  }else{
    alert("The booking button is ready. Add Deer Run's live tee-time booking URL to data.js first.");
  }
});

document.querySelector(".menu-btn").addEventListener("click",()=>{
  document.querySelector(".nav nav").style.display =
    document.querySelector(".nav nav").style.display==="flex" ? "" : "flex";
  document.querySelector(".nav nav").style.position="absolute";
  document.querySelector(".nav nav").style.top="78px";
  document.querySelector(".nav nav").style.right="0";
  document.querySelector(".nav nav").style.background="#f5f4ee";
  document.querySelector(".nav nav").style.padding="20px";
  document.querySelector(".nav nav").style.flexDirection="column";
});

renderHours();
renderSpecials();
renderMenu();
renderCalendar();
