import React from 'react';
import {AutoScene} from '../components/auto';

export const Capillary: React.FC = () => <AutoScene k="capillary" d={{"tag": "考点八", "title": "毛细现象", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "big", "at": "a1", "text": "浸润：细管中{上升}", "size": 40}]}, {"blocks": [{"t": "big", "at": "a1", "text": "不浸润：细管中{下降|orange}", "size": 40, "c": "orange", "soft": "orangeSoft"}]}]}, {"t": "rule", "tag": "规律", "at": "a2", "text": "管{越细}越明显", "c": "red"}, {"t": "text", "at": "a3", "text": "毛巾吸水、灯芯吸油、土壤水分上升", "size": 32}], "callout": {"label": "要点", "at": "a4", "text": "锄松土壤破坏毛细管，{保存水分}"}}} />;
