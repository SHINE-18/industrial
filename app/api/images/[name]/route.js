import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const IMAGE_MAP = {
  'asphalt-plant': 'ryetek_hd_hero_plant_1785415478361.png',
  'bitumen-tanks': 'ryetek_bitumen_tanks_1785408542667.png',
  'wearguard-parts': 'ryetek_wearguard_parts_1785408567569.png',
  'material-handling': 'ryetek_material_handling_1785408591794.png',
  'automation-room': 'ryetek_automation_control_room_1785408614548.png',
  'rotary-dryer': 'ryetek_drum_hero_1785406290614.png',
  'wearguard-callout': 'ryetek_wearguard_callout_1785406307672.png',
  'scada-hmi': 'ryetek_scada_hmi_1785406325215.png',
  'rpm-6': 'ryetek_drum_rpm_6_1785415860079.png',
  'rpm-8': 'ryetek_drum_rpm_8_1785415874159.png',
  'rpm-10': 'ryetek_drum_rpm_10_1785415887815.png',
  'rpm-12': 'ryetek_drum_rpm_12_1785415901212.png',
};

const BRAIN_DIR = 'C:/Users/shine/.gemini/antigravity-ide/brain/bd865248-f24a-4d92-b802-ab8e19f0df3c';

export async function GET(request, { params }) {
  const imageName = params.name;
  const fileName = IMAGE_MAP[imageName];

  if (!fileName) {
    return new NextResponse('Image not found', { status: 404 });
  }

  const filePath = path.join(BRAIN_DIR, fileName);

  try {
    const fileBuffer = fs.readFileSync(filePath);
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    return new NextResponse('File read error', { status: 500 });
  }
}
