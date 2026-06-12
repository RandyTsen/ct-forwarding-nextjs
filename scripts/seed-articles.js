// scripts/seed-articles.js
// Pushes body content to 4 empty Sanity news posts.
// Run: SANITY_API_TOKEN=<write_token> node scripts/seed-articles.js

const { createClient } = require('@sanity/client')

const client = createClient({
  projectId: 'ot6f16uu',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

const articles = [
  {
    _id: 'ebef3896-7317-4ff9-92bb-f5c27a844ba0',
    title: 'CT Forwarding Expands Fleet to 200+ Units',
    body: [
      {
        _type: 'block',
        _key: 'b1',
        style: 'normal',
        children: [{ _type: 'span', _key: 's1', text: 'CT Forwarding & Transport Sdn Bhd has completed a major fleet expansion, bringing its total operational vehicles to over 200 units across Sabah. The investment reinforces CT\'s position as the state\'s largest private logistics operator.' }],
      },
      {
        _type: 'block',
        _key: 'b2',
        style: 'h2',
        children: [{ _type: 'span', _key: 's1', text: 'What\'s New in the Fleet' }],
      },
      {
        _type: 'block',
        _key: 'b3',
        style: 'normal',
        children: [{ _type: 'span', _key: 's1', text: 'The expansion adds new prime movers, side loaders, and low-loaders — bringing CT\'s specialised vehicle count to 10 distinct types. Every new unit is LPKP licensed, GPS-tracked, and inspection-certified before entering service.' }],
      },
      {
        _type: 'block',
        _key: 'b4',
        style: 'normal',
        children: [{ _type: 'span', _key: 's1', text: 'Side loaders now handle self-loading container operations without crane dependency, reducing port turnaround time. The additional low-loaders — equipped with triple and quad axles — expand CT\'s capacity for oversized project cargo, supporting infrastructure clients in the energy and telecoms sectors.' }],
      },
      {
        _type: 'block',
        _key: 'b5',
        style: 'h2',
        children: [{ _type: 'span', _key: 's1', text: 'Why Fleet Size Matters in Sabah' }],
      },
      {
        _type: 'block',
        _key: 'b6',
        style: 'normal',
        children: [{ _type: 'span', _key: 's1', text: 'Sabah\'s geography — spanning Kota Kinabalu, Sandakan, Tawau, and inland districts — demands a fleet that can cover long hauls without subcontracting. CT\'s owned fleet means consistent service levels, direct accountability, and no third-party scheduling delays.' }],
      },
      {
        _type: 'block',
        _key: 'b7',
        style: 'blockquote',
        children: [{ _type: 'span', _key: 's1', text: '"A bigger owned fleet means we control every delivery. Our clients don\'t have to wonder who is handling their cargo." — CT Forwarding Operations' }],
      },
    ],
  },
  {
    _id: '8f92755b-92f2-432a-880d-3849e94d3525',
    title: 'Customs Clearance in Sabah — The CT Advantage',
    body: [
      {
        _type: 'block',
        _key: 'b1',
        style: 'normal',
        children: [{ _type: 'span', _key: 's1', text: 'Customs clearance is one of the most friction-prone steps in any import or export chain. For businesses operating in Sabah, the difference between a smooth clearance and a costly delay often comes down to who handles the paperwork — and whether they hold an in-house Licensed Customs Agent credential.' }],
      },
      {
        _type: 'block',
        _key: 'b2',
        style: 'h2',
        children: [{ _type: 'span', _key: 's1', text: 'What a Licensed Customs Agent Does' }],
      },
      {
        _type: 'block',
        _key: 'b3',
        style: 'normal',
        children: [{ _type: 'span', _key: 's1', text: 'A Licensed Customs Agent (also known as a Customs Broker) is authorised by the Royal Malaysian Customs Department to prepare and submit import/export declarations on behalf of cargo owners. Without one, documentation must go through a third party — adding time, cost, and a communication layer between you and the port.' }],
      },
      {
        _type: 'block',
        _key: 'b4',
        style: 'normal',
        children: [{ _type: 'span', _key: 's1', text: 'CT Forwarding holds this licence in-house. That means customs declaration, classification, duty calculation, and documentation are handled by the same team managing your cargo — no handoffs, no outsourced intermediaries.' }],
      },
      {
        _type: 'block',
        _key: 'b5',
        style: 'h2',
        children: [{ _type: 'span', _key: 's1', text: 'The Kota Kinabalu Port Advantage' }],
      },
      {
        _type: 'block',
        _key: 'b6',
        style: 'normal',
        children: [{ _type: 'span', _key: 's1', text: 'With 25+ years of operations at KK Port, CT\'s customs team has established relationships with port inspectors and JKDM officers that translate into faster document processing. Familiarity with port procedures, peak periods, and inspection queues means CT can anticipate delays before they happen.' }],
      },
      {
        _type: 'block',
        _key: 'b7',
        style: 'normal',
        children: [{ _type: 'span', _key: 's1', text: 'For businesses shipping dangerous goods, CT also holds the relevant certification — ensuring hazmat shipments move through customs without the additional delays that come with certification gaps.' }],
      },
      {
        _type: 'block',
        _key: 'b8',
        style: 'blockquote',
        children: [{ _type: 'span', _key: 's1', text: '"Every day a container sits at port costs money. In-house customs capability is the single biggest factor in whether we clear in hours or days." — CT Forwarding Customs Team' }],
      },
    ],
  },
  {
    _id: 'e5469618-e732-46b7-9057-314c498f0326',
    title: 'Project Cargo 101 — Planning Your Heavy Lift',
    body: [
      {
        _type: 'block',
        _key: 'b1',
        style: 'normal',
        children: [{ _type: 'span', _key: 's1', text: 'Project cargo — oversized, heavy, or high-value cargo that cannot be containerised — requires a fundamentally different logistics approach. Unlike standard freight, there are no standard answers. Every project cargo movement is a bespoke engineering problem.' }],
      },
      {
        _type: 'block',
        _key: 'b2',
        style: 'h2',
        children: [{ _type: 'span', _key: 's1', text: 'Step 1: Route Survey' }],
      },
      {
        _type: 'block',
        _key: 'b3',
        style: 'normal',
        children: [{ _type: 'span', _key: 's1', text: 'Before any heavy lift moves, the entire route must be surveyed: bridge load ratings, overhead clearance at utility lines and underpasses, road surface conditions, and turning radius at every junction. In Sabah, rural routes to energy or plantation sites often require advance coordination with JKR (Public Works Department) and utility providers to temporarily raise power lines.' }],
      },
      {
        _type: 'block',
        _key: 'b4',
        style: 'h2',
        children: [{ _type: 'span', _key: 's1', text: 'Step 2: Permit and Compliance' }],
      },
      {
        _type: 'block',
        _key: 'b5',
        style: 'normal',
        children: [{ _type: 'span', _key: 's1', text: 'Oversized and overweight loads require Special Abnormal Permits from JPJT. CT handles all permit applications as part of project scoping — including escort vehicle requirements, which are mandatory for loads exceeding specific width and length thresholds on federal roads.' }],
      },
      {
        _type: 'block',
        _key: 'b6',
        style: 'h2',
        children: [{ _type: 'span', _key: 's1', text: 'Step 3: Equipment Matching' }],
      },
      {
        _type: 'block',
        _key: 'b7',
        style: 'normal',
        children: [{ _type: 'span', _key: 's1', text: 'Load distribution across axles is a precise calculation. CT\'s engineering approach matches the right low-loader configuration — triple axle, quad axle, or multi-axle modular trailer — to the cargo weight and point load specifications. Getting this wrong causes road damage, permit violations, and safety failures.' }],
      },
      {
        _type: 'block',
        _key: 'b8',
        style: 'normal',
        children: [{ _type: 'span', _key: 's1', text: 'CT has executed project cargo movements for Petronas, Telekom Malaysia, and Ranhill — Sabah\'s most technically demanding clients. The zero failed deliveries record is the result of this planning discipline, not luck.' }],
      },
      {
        _type: 'block',
        _key: 'b9',
        style: 'blockquote',
        children: [{ _type: 'span', _key: 's1', text: '"Project cargo failures are always a planning failure. The movement itself is the easy part." — CT Forwarding Project Cargo Team' }],
      },
    ],
  },
  {
    _id: 'eae68a52-e460-4214-a387-00109c565c32',
    title: 'Container Haulage in Sabah — What to Know',
    body: [
      {
        _type: 'block',
        _key: 'b1',
        style: 'normal',
        children: [{ _type: 'span', _key: 's1', text: 'Container haulage is the backbone of Sabah\'s import and export supply chain. Every container that moves through Kota Kinabalu Port, Sapangar Bay Container Terminal, or KKIP needs road transport — and the quality of that transport directly determines supply chain reliability.' }],
      },
      {
        _type: 'block',
        _key: 'b2',
        style: 'h2',
        children: [{ _type: 'span', _key: 's1', text: '20ft vs 40ft — Choosing the Right Container' }],
      },
      {
        _type: 'block',
        _key: 'b3',
        style: 'normal',
        children: [{ _type: 'span', _key: 's1', text: 'The choice between a 20ft (TEU) and 40ft (FEU) container affects both transport cost and access. CT\'s fleet handles both, but there are route considerations: 40ft containers have a longer turning radius and are restricted on certain Sabah rural roads. Your logistics partner should flag these constraints during booking, not on the day of collection.' }],
      },
      {
        _type: 'block',
        _key: 'b4',
        style: 'h2',
        children: [{ _type: 'span', _key: 's1', text: 'GPS Tracking and Live Visibility' }],
      },
      {
        _type: 'block',
        _key: 'b5',
        style: 'normal',
        children: [{ _type: 'span', _key: 's1', text: 'Every CT prime mover is GPS-tracked. For clients managing time-sensitive supply chains — especially cold chain or high-value cargo — live location data removes uncertainty from the last-mile. CT provides tracking updates on request and can integrate with client ERP systems for automated milestone notifications.' }],
      },
      {
        _type: 'block',
        _key: 'b6',
        style: 'h2',
        children: [{ _type: 'span', _key: 's1', text: 'East Sabah Coverage' }],
      },
      {
        _type: 'block',
        _key: 'b7',
        style: 'normal',
        children: [{ _type: 'span', _key: 's1', text: 'Sandakan and Tawau are often underserved by logistics providers based in KK. CT operates regular long-haul routes to both East Sabah hubs, with consistent scheduling that allows manufacturers and distributors to plan their inventory cycles accurately. No subcontracting on these routes — CT drivers, CT trucks.' }],
      },
      {
        _type: 'block',
        _key: 'b8',
        style: 'blockquote',
        children: [{ _type: 'span', _key: 's1', text: '"Reliable container haulage isn\'t just about the truck. It\'s about the scheduling, the documentation, and knowing the driver will show up on time." — CT Forwarding' }],
      },
    ],
  },
]

async function seed() {
  for (const article of articles) {
    const { _id, body } = article
    try {
      await client
        .patch(_id)
        .set({ body })
        .commit()
      console.log(`✓ Patched: ${article.title}`)
    } catch (err) {
      console.error(`✗ Failed: ${article.title}`, err.message)
    }
  }
  console.log('\nDone.')
}

seed()
