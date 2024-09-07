from typing import TypedDict
import os
import shutil
import subprocess

shutil.rmtree('./documents', ignore_errors=True)
os.makedirs('./documents')
os.chdir('./documents')

# Clone all repositories
repos = [
    "transgender-learning-resources",
    "sexuality-learning-resources",
    "the-coming-out-handbook",
    "lgbtqia-videos",
    "flags-of-the-lgbtqia-community"
]

for repo in repos:
    subprocess.run(
        ["git", "clone", f"https://github.com/pride-translators/{repo}"])

# Go back to the root directory
os.chdir('..')

# Remove the src/routes/documents directory
shutil.rmtree('./src/routes/documents', ignore_errors=True)


class Document(TypedDict):
    src_dir: str
    dest_dir: str


transgender_docs = [
    Document(
        src_dir="./transgender-learning-resources/NCTE/frequently_asked_questions_about_transgender_people.md",
        dest_dir="./transgender/frequently_asked_questions_about_transgender_people"
    ),
    Document(
        src_dir="./transgender-learning-resources/NCTE/understanding_nonbinary_people_how_to_be_respectful_and_supportive.md",
        dest_dir="./transgender/understanding_nonbinary_people_how_to_be_respectful_and_supportive"
    ),
    Document(
        src_dir="./transgender-learning-resources/APA/transgender_people_gender_identity_gender_expression.md",
        dest_dir="./transgender/transgender_people_gender_identity_gender_expression"
    )
]

sexuality_docs = [
    Document(
        src_dir="./sexuality-learning-resources/better_health_channel/sexuality_explained.md",
        dest_dir="./sexuality/sexuality_explained"
    ),
    Document(
        src_dir="./sexuality-learning-resources/human_rights_campaign/understanding_the_asexual_community.md",
        dest_dir="./sexuality/understanding_the_asexual_community"
    ),
    Document(
        src_dir="./sexuality-learning-resources/the_trevor_project/understanding_asexuality.md",
        dest_dir="./sexuality/understanding_asexuality"
    ),
    Document(
        src_dir="./sexuality-learning-resources/scientific_american/asexuality_is_finally_breaking_free_from_medical_stigma/asexuality_is_finally_breaking_free_from_medical_stigma.md",
        dest_dir="./sexuality/asexuality_is_finally_breaking_free_from_medical_stigma"
    ),
]

video_docs = [
    Document(
        src_dir="./lgbtqia-videos/cnn/wanted_to_show_kids_it_is_ok_to_be_gay.md",
        dest_dir="./videos/wanted_to_show_kids_it_is_ok_to_be_gay"
    ),
    Document(
        src_dir="./lgbtqia-videos/storybooth/im_transgender.md",
        dest_dir="./videos/im_transgender"
    ),
    Document(
        src_dir="./lgbtqia-videos/doctor-youn/what-studies-say-about-transgender-gender-dysphoria-and-gender-affirming-care.md",
        dest_dir="./videos/what-studies-say-about-transgender-gender-dysphoria-and-gender-affirming-care"
    ),
]


# Move the documents into the new structure
def move_documents(docs: list[Document]):
    route_base_dir = "./src/routes/documents"
    src_base_dir = './documents'

    for item in docs:
        dest_dir = os.path.join(
            route_base_dir, item["dest_dir"])
        os.makedirs(dest_dir, exist_ok=True)

        src_file = os.path.join(src_base_dir, item["src_dir"])
        dest_file = os.path.join(dest_dir, '+page.md')

        shutil.move(src_file, dest_file)


move_documents(transgender_docs)
move_documents(sexuality_docs)
move_documents(video_docs)
