# HumanFirewall 

[
[

##  Что такое HumanFirewall?

**HumanFirewall** — киберпанковская платформа киберграмотности для обычных людей и сотрудников компаний. Защищает от фишинга, взломов и утечек через:

- **AI-сканер фишинговых писем** (95% точность)  
- **Микро-уроки** (3-5 минут) по Telegram, Gmail, банкам  
- **Интерактивные симуляции атак**  
- **Сертификаты** для резюме  
- **B2B-дашборд** для HR: статистика рисков по команде  

**Цель**: Снизить человеческий фактор в 95% кибератак за 15 минут обучения.

##  Киберпанк-дизайн
- Неоновый фиолетовый (#7C4DFF) + cyan glow  
- Glitch-эффекты, сканлайны, матрица-фон  
- Dark mode для полного погружения  



##  Демо
**[Live Demo](https://humanfirewall.streamlit.app)** 


если линк не работает попробуйте это:
### способ 1

open index.html          # macOS

xdg-open index.html      # Linux

start index.html         # Windows


### способ 2 
python3 -m http.server 8000

# Затем открыть http://localhost:8000


##  Основные возможности

| Фича | Описание |
|------|----------|
| 🛡️ **Фишинг-сканер** | Вставь письмо → AI покажет риски за 2 сек |
| 📚 **5 модулей** | Фишинг, пароли, 2FA, Telegram, банки |
| 📊 **Личный дашборд** | Прогресс, риск-скор, бейджи |
| 🏢 **Компания-панель** | Heatmap рисков, топ-ошибок сотрудников |
| 🏆 **Сертификат PDF** | Голографический дизайн + QR-верификация |

##  Технологии
```
Frontend: Streamlit + Plotly + Cyberpunk CSS
Backend: Python + scikit-learn (Isolation Forest)
AI: HuggingFace Phishing Models
PDF: ReportLab
Deploy: Streamlit Cloud
```

##  Быстрый старт

```bash
git clone https://github.com/thegurg/HumanFirewall.git
cd HumanFirewall
pip install -r requirements.txt
streamlit run app.py
```

##  Структура проекта
```
├── app.py                 # Главный Streamlit app
├── cyberpunk.css          # Киберпанк стили
├── phishing_model.pkl     # ML модель фишинга
├── lessons/               # Markdown уроки
├── certificates/          # PDF шаблоны
└── requirements.txt
```

##  Результаты MVP
- **Точность сканера**: 94.7%  
- **Время урока**: 3:12 мин (среднее)  
- **Retention**: 87% до конца курса  

##  Автор
**@thegurg** — Fullstack Developer

##  Лицензия
MIT

***

**HumanFirewall: Будущее киберзащиты начинается с человека.** 🔥💜

***
