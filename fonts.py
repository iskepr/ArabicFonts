import os
import json

def get_installed_fonts():
    fonts_dir = r"./fonts"  # مجلد الخطوط على ويندوز
    fonts = []

    for font_file in os.listdir(fonts_dir):
        # استخراج أسماء الخطوط فقط
        if font_file.endswith((".ttf", ".otf", ".ttc")):  # ملفات الخطوط الشائعة
            fonts.append(font_file)

    return fonts

def save_fonts_to_json(fonts, output_file):
    # حذف الملف إذا كان موجودًا
    if os.path.exists(output_file):
        os.remove(output_file)
        print(f"تم حذف الملف السابق: {output_file}")

    # إنشاء ملف JSON جديد
    with open(output_file, "w", encoding="utf-8") as json_file:
        json.dump(fonts, json_file, ensure_ascii=False, indent=4)  # كتابة القائمة في ملف JSON
    print(f"تم إنشاء ملف جديد: {output_file}")

# استخراج الخطوط وحفظها
fonts_list = get_installed_fonts()
save_fonts_to_json(fonts_list, "fonts.json")
