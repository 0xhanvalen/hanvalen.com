export default function Home() {
  return (
    <>
      <div
        style={{
          display: `flex`,
          flexDirection: `column`,
          maxWidth: `70ch`,
          margin: `2rem auto`,
          padding: `2ch`,
        }}
      >
        <h1>0xHanValen</h1>
        <div>
          <h2>
            Web3 Developer <br /> Next JS, Node, Solidity
          </h2>
          <p>I make web3 apps and smart contracts fast as fuck boyyyyy</p>
        </div>
        <div>
          <h2>Contact</h2>
          <p>
            Ask for me at{" "}
            <a href="https://www.raidguild.org/hire" target="_blank" rel="noreferrer">
              Raidguild
            </a>
          </p>
        </div>
        <div>
          <h2>Past Work</h2>
          <div>
            <h3>Based Ghouls</h3>
            <h4>Front End, Smart Contracts</h4>
            <p>
              A PFP project that had 2 allowlists and custom, dynamic allowlist
              reservation. Freemint that did over 600eth in secondary volume.
              Explore the front end{" "}
              <a href="www.basedghouls.com" target="_blank" rel="noreferrer">
                here
              </a>{" "}
              &amp; Opensea{" "}
              <a
                href="https://opensea.io/collection/based-ghouls"
                target="_blank" rel="noreferrer"
              >
                here.
              </a>
            </p>
          </div>
          <div>
            <h3>SW DAO</h3>
            <h4>Front End</h4>
            <p>
              A defi roboadvisor. I added a marketing/blogging site to their
              stack to help them be more discoverable, viewable{" "}
              <a href="https://www.swdao.org" target="_blank" rel="noreferrer">
                here.
              </a>
              <br />
              I'm currently working on a whitelabelling solution for their dApp
              platform to allow their customers to upload arbitrary tokenset
              instances and allow those customers followers to interact with the
              tokensets in an improved UI.
            </p>
          </div>
          <div>
            <h3>Trashdao</h3>
            <h4>Front End</h4>
            <p>
              Trashdao is a proof-of-concept implementation of a{" "}
              <a href="https://www.szns.io" target="_blank" rel="noreferrer">
                szns.io
              </a>{" "}
              dao community page to help promote szns.io. You can view trashdao{" "}
              <a href="https://www.trashdao.xyz">here.</a>
            </p>
          </div>
          <div>
            <h3>Skaterbirds</h3>
            <h4>Smart Contract &amp; Front End</h4>
            <p>
              I rescued Skaterbirds from the depths of hell - I came in to the
              project at the 11th hour to help them finish their contract and
              deploy their minting site. Multiple allowlists, dynamic sale
              prices, pre-reveal and post-reveal dynamics.{" "}
              <a href="https://mint.skaterbirds.io/" target="_blank" rel="noreferrer">
                Site here
              </a>{" "}
              &amp;{" "}
              <a
                href="https://opensea.io/collection/skater-birds-skatepark"
                target="_blank" rel="noreferrer"
              >
                Opensea here.
              </a>
            </p>
          </div>
          <div>
            <h3>STOA</h3>
            <h4>Smart Contracts</h4>
            <p>
              I merely contributed to this project - I wrote novel functionality
              into the ERC-1155 spec to allow the client to mint discrete but
              identical Seasons of NFTs to share as rewards with the apps users.
            </p>
          </div>
          <div>
            <h3>METL</h3>
            <h4>Smart Contracts</h4>
            <p>
              I merely contributed to this project - I wrote a Role Based Access
              Control ERC20 to assist in the management of Stablecoin supply and
              defend their protocol against attacks.
            </p>
          </div>
          <div>
            <h3>A secret lil thingy</h3>
            <h4>Smart Contracts, Front End</h4>
            <p>
              I worked on a NFT start up that lacked sufficient marketing
              support sadly, but I still did the work. Happy to share my
              repositories with people seriously inquiring!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
