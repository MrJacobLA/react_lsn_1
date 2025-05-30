import React from "react";

function Navigation() {
  return (
    //py: 	Vertikales Padding = 1rem oben & unten, bg-neutral text-neutral-content===neutraler und dukeler BG immer lesbar. list-none: Punkte weg
    <nav className="absolute left-0 right-0 bg-neutral text-neutral-content py-4">
      <ul className="flex justify-center gap-8  m-0 p-0 list-none">
        <li>
          <a
            className="no-underline hover:underline hover:bg-amber-500"
            href="#hero"
          >
            Start
          </a>
        </li>
        <li>
          {/* className="no-underline hover:underline hover:bg-amber-500" macht hier erst no= alles löschen und dann hovereffekte  */}

          <a
            className="no-underline hover:underline hover:bg-amber-500"
            href="#services"
          >
            Leistungen
          </a>
        </li>
        <li>
          <a
            className="no-underline hover:underline hover:bg-amber-500"
            href="#footer"
          >
            Kontakt
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
