import React from 'react';
import {AutoScene} from '../components/auto';

export const Collide: React.FC = () => <AutoScene k="collide" d={{"tag": "考点一", "title": "基元反应与有效碰撞", "blocks": [{"t": "rule", "tag": "基元反应", "at": "co1", "text": "一步完成的反应；多步组成{反应历程}", "c": "red", "size": 32}, {"t": "rule", "tag": "有效碰撞", "at": "co2", "text": "能发生化学反应的碰撞", "c": "red", "size": 32}, {"t": "row", "cols": [{"blocks": [{"t": "big", "at": "co3", "text": "① 足够能量（{活化分子}）", "size": 36}]}, {"blocks": [{"t": "big", "at": "co3", "text": "② {取向合适|orange}", "size": 36, "c": "orange", "soft": "orangeSoft"}]}]}], "callout": {"label": "易错", "at": "co4", "text": "活化分子的碰撞{不一定}是有效碰撞"}, "beat": {"k": "bump", "at": "co3b", "text": "撞上了 ≠ 反应了\n还要{能量够、取向对|red}"}}} />;
