import { getAllWrestlers } from '../../../services/roster';

// returns a list of all players
export default async function handler(req, res) {
  try {
    const roster = await getAllWrestlers();
    res.json({ success: true, roster });
  }
  catch (ex) {
    console.error('Failed: [/api/roster/get]:', ex)
    return res.json({ success: false, err: 'No data was found. Missing available grade levels.'});
  }
}
