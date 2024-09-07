from typing import TypedDict
import os
import shutil
import subprocess

shutil.rmtree('./documents', ignore_errors=True)
os.makedirs('./documents')
os.chdir('./documents')

# Clone repositories.
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

os.chdir('..')

shutil.rmtree('./src/routes/documents', ignore_errors=True)


class Document(TypedDict):
    src_dir: str
    dest_dir: str
    replacements: list[tuple[str, str]] | None


transgender_docs = [
    Document(
        src_dir="./documents/transgender-learning-resources/NCTE/frequently_asked_questions_about_transgender_people.md",
        dest_dir="./src/routes/documents/transgender/frequently_asked_questions_about_transgender_people",
        replacements=None
    ),
    Document(
        src_dir="./documents/transgender-learning-resources/NCTE/understanding_nonbinary_people_how_to_be_respectful_and_supportive.md",
        dest_dir="./src/routes/documents/transgender/understanding_nonbinary_people_how_to_be_respectful_and_supportive",
        replacements=None
    ),
    Document(
        src_dir="./documents/transgender-learning-resources/APA/transgender_people_gender_identity_gender_expression.md",
        dest_dir="./src/routes/documents/transgender/transgender_people_gender_identity_gender_expression",
        replacements=None
    )
]

sexuality_docs = [
    Document(
        src_dir="./documents/sexuality-learning-resources/better_health_channel/sexuality_explained.md",
        dest_dir="./src/routes/documents/sexuality/sexuality_explained",
        replacements=None
    ),
    Document(
        src_dir="./documents/sexuality-learning-resources/human_rights_campaign/understanding_the_asexual_community.md",
        dest_dir="./src/routes/documents/sexuality/understanding_the_asexual_community",
        replacements=None
    ),
    Document(
        src_dir="./documents/sexuality-learning-resources/the_trevor_project/understanding_asexuality.md",
        dest_dir="./src/routes/documents/sexuality/understanding_asexuality",
        replacements=None
    ),
    Document(
        src_dir="./documents/sexuality-learning-resources/scientific_american/asexuality_is_finally_breaking_free_from_medical_stigma/asexuality_is_finally_breaking_free_from_medical_stigma.md",
        dest_dir="./src/routes/documents/sexuality/asexuality_is_finally_breaking_free_from_medical_stigma",
        replacements=None
    ),
]


video_docs = [
    Document(
        src_dir="./documents/lgbtqia-videos/cnn/wanted_to_show_kids_it_is_ok_to_be_gay.md",
        dest_dir="./src/routes/documents/videos/wanted_to_show_kids_it_is_ok_to_be_gay",
        replacements=None
    ),
    Document(
        src_dir="./documents/lgbtqia-videos/storybooth/im_transgender.md",
        dest_dir="./src/routes/documents/videos/im_transgender",
        replacements=None
    ),
    Document(
        src_dir="./documents/lgbtqia-videos/doctor-youn/what-studies-say-about-transgender-gender-dysphoria-and-gender-affirming-care.md",
        dest_dir="./src/routes/documents/videos/what-studies-say-about-transgender-gender-dysphoria-and-gender-affirming-care",
        replacements=None
    ),
]

other_docs = [
    Document(
        src_dir="./documents/the-coming-out-handbook/README.md",
        dest_dir="./src/routes/documents/others/the-coming-out-handbook",
        replacements=None
    ),
]


def move_documents(docs: list[Document]):
    """Move documents into the new structure."""
    for item in docs:
        os.makedirs(item["dest_dir"], exist_ok=True)

        src_file = os.path.join(item["src_dir"])
        dest_file = os.path.join(item["dest_dir"], '+page.md')

        shutil.move(src_file, dest_file)


move_documents(transgender_docs)
move_documents(sexuality_docs)
move_documents(video_docs)
move_documents(other_docs)

shutil.rmtree('./documents', ignore_errors=True)
