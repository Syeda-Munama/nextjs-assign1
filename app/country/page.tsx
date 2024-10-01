"use client";
import Link from "next/link";
import { countries } from "../countryData";

export default function Country() {
  return (
    <div className="container">
      <h1><b>Country List</b></h1>
      <ul>
        {Object.keys(countries).map((countryKey) => (
          <li key={countryKey} className="country-item">
            <Link href={`/country/${countryKey}`} passHref>
              <span className="country-link">
                {countries[countryKey].name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .container {
          padding: 20px;
          font-size: 24px;
          text-align: center;
          border-radius: 8px;
          max-width: 600px;
          margin: 0 auto;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        h1 {
          font-size: 32px;
          color: #333;
          margin-bottom: 20px;
        }

        ul {
          padding: 0;
          list-style: none;
        }

        .country-item {
          margin: 10px 0;
        }

        .country-link {
          display: inline-block;
          padding: 12px 20px;
          background: #F5E1FD;
          border: 2px solid white;
          border-radius: 5px;
          color: #333;
          text-decoration: none;
          
          transition: all 0.3s ease;
        }

        .country-link:hover {
          background-color: #CE9DD9;
          color: white;
          border-color: white;
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
          transform: translateY(-3px);
        }
      `}</style>
    </div>
  );
}


