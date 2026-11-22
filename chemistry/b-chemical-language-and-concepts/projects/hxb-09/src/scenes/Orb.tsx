import React from 'react';
import {AutoScene} from '../components/auto';

export const Orb: React.FC = () => <AutoScene k="orb" d={{"tag": "考点七", "title": "排布式、轨道表示式与 VSEPR 模型", "blocks": [{"t": "rule", "tag": "价层排布", "at": "or2", "text": "Fe：3d^6 4s^2　Cr：{3d^5 4s^1}　Cu：{3d^10 4s^1}", "c": "red", "size": 32}, {"t": "rule", "tag": "轨道表示式", "at": "or3", "text": "同一轨道{自旋相反|orange}；简并轨道先分占、{自旋平行|orange}", "c": "orange", "size": 32}, {"t": "rule", "tag": "VSEPR", "at": "or4", "text": "H2O：VSEPR 模型{四面体形}，空间结构 V 形", "c": "green", "size": 32}], "callout": {"label": "易错", "at": "or5", "text": "“VSEPR 模型”含孤电子对，“空间结构”不含：{别混用}"}}} />;
