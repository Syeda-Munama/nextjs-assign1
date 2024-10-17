// "use client";
// import { useParams } from "next/navigation"; // Use useParams from next/navigation
// import { countries } from "../../countryData";
// import Link from "next/link";

// export default function CountryDetails(){

//   const {country_name} = useParams() as { country_name: string };
//   const country = countries[country_name];

//   if(!country)
//   {
//     return (
//       <div style={{ padding: "20px", fontFamily: "Georgia"}}>
//         <h1>Country Not Found</h1>
//         <h1>The country you are trying to find is not in our records.</h1>
//         <Link href="/country">Go back to country list.</Link>
//       </div>
//     )
//   }
//   return(
//     <div
//   style={{
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "100vh", 
//   }}
// >
//   <div
//     style={{
//       padding: "20px",
//       fontSize: "26px",
//       textAlign: "center",
//       height: "380px",
//       width: "370px",
//       backgroundColor: "lavender",
//       boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
//       borderRadius: "10px",
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "center",
//       alignItems: "center",
//     }}
//   >
//     <h1>{country.name}</h1>
//     <p><b>Population:</b> {country.population}</p>
//     <p><b>Capital:</b> {country.capital}</p>
//     <Link href="/country" style={{textDecoration: "underline", color: "purple"}}>Go back to country list.</Link>
//   </div>
// </div>

//   )
// }
// app/country/[country_name]/page.tsx
import Link from "next/link";
import { countries} from "../../countryData";



export default function CountryDetail({ params }: { params: { country_name: string } }) {
  const country = countries[params.country_name];

  if (!country) {
    return (
      <div style={{ padding: "20px", fontFamily: "Georgia"}}>
        <h1>Country Not Found</h1>
        <h1>The country you are trying to find is not in our records.</h1>
        <Link href="/country" style={{color: "blue", textDecoration: "underline"}}>Go back to country list.</Link>
      </div>
    )
  }

  return (

          <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh", 
        }}
      >
        <div
          style={{
            padding: "20px",
            fontSize: "26px",
            textAlign: "center",
            height: "380px",
            width: "370px",
            backgroundColor: "lavender",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
    <div className="container">
      <h1>{country.name}</h1>
      <p><strong>Population:</strong> {country.population}</p>
      <p><strong>Capital:</strong> {country.capital}</p>
      <Link href="/country" style={{color: "purple", textDecoration: "underline"}}>Go back to country list.</Link>
    </div>
    </div>
    </div>
  );
}


export async function generateStaticParams() {
  return Object.keys(countries).map((country_name) => ({
    country_name,
  }));
}
