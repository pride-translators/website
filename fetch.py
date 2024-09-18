from typing import TypedDict
import os
import shutil
import subprocess
import sys

path = '' if 'dev' in sys.argv else '/website'

# Empty and refill "./documents" folder
shutil.rmtree("./documents", ignore_errors=True)
os.makedirs("./documents")
os.chdir("./documents")
repositories = [
    "gender-learning-resources",
    "sexuality-learning-resources",
    "the-coming-out-handbook",
    "lgbtqia-videos",
    "flags-of-the-lgbtqia-community",
]
for repository in repositories:
    subprocess.run([
        "git",
        "clone",
        f"https://github.com/pride-translators/{repository}"
    ])
os.chdir("..")


def empty_folder_with_excluding_names(folder_path: str, names_to_keep: list[str]):
    if not os.path.exists(folder_path):
        raise FileNotFoundError(f"The folder {folder_path} does not exist.")

    items_in_directory = os.listdir(folder_path)

    for item in items_in_directory:
        item_path = os.path.join(folder_path, item)

        if item not in names_to_keep:
            if os.path.isfile(item_path):
                os.remove(item_path)
            elif os.path.isdir(item_path):
                shutil.rmtree(item_path)


empty_folder_with_excluding_names(
    "./src/routes/documents",
    ["+layout", "+layout.svelte", "+layout.ts", "+layout.server.ts"]
)


class Document(TypedDict):
    source_file_directory: str
    destination_file_directory: str
    replacements: list[tuple[str, str]] | None
    attachment_folder_name: str | None


gender_docs = [
    Document(
        source_file_directory="./documents/gender-learning-resources/NCTE/frequently_asked_questions_about_transgender_people.md",
        destination_file_directory="./src/routes/documents/gender/frequently_asked_questions_about_transgender_people/+page.md",
        replacements=None,
        attachment_folder_name=None,
    ),
    Document(
        source_file_directory="./documents/gender-learning-resources/APA/transgender_people_gender_identity_gender_expression.md",
        destination_file_directory="./src/routes/documents/gender/transgender_people_gender_identity_gender_expression/+page.md",
        replacements=None,
        attachment_folder_name=None,
    ),
    Document(
        source_file_directory="./documents/gender-learning-resources/NCTE/understanding_nonbinary_people_how_to_be_respectful_and_supportive.md",
        destination_file_directory="./src/routes/documents/gender/understanding_nonbinary_people_how_to_be_respectful_and_supportive/+page.md",
        replacements=None,
        attachment_folder_name=None,
    ),
    Document(
        source_file_directory="./documents/gender-learning-resources/the_trevor_project/understanding_gender_identities.md",
        destination_file_directory="./src/routes/documents/gender/understanding_gender_identities/+page.md",
        replacements=None,
        attachment_folder_name=None,
    ),
]

sexuality_docs = [
    Document(
        source_file_directory="./documents/sexuality-learning-resources/better_health_channel/sexuality_explained.md",
        destination_file_directory="./src/routes/documents/sexuality/sexuality_explained/+page.md",
        replacements=None,
        attachment_folder_name=None,
    ),
    Document(
        source_file_directory="./documents/sexuality-learning-resources/human_rights_campaign/understanding_the_asexual_community.md",
        destination_file_directory="./src/routes/documents/sexuality/understanding_the_asexual_community/+page.md",
        replacements=None,
        attachment_folder_name=None,
    ),
    Document(
        source_file_directory="./documents/sexuality-learning-resources/the_trevor_project/understanding_asexuality.md",
        destination_file_directory="./src/routes/documents/sexuality/understanding_asexuality/+page.md",
        replacements=None,
        attachment_folder_name=None,
    ),
    Document(
        source_file_directory="./documents/sexuality-learning-resources/scientific_american/asexuality_is_finally_breaking_free_from_medical_stigma/asexuality_is_finally_breaking_free_from_medical_stigma.md",
        destination_file_directory="./src/routes/documents/sexuality/asexuality_is_finally_breaking_free_from_medical_stigma/+page.md",
        replacements=[
            ("./attachments", f"{path}/asexuality_is_finally_breaking_free_from_medical_stigma")],
        attachment_folder_name="asexuality_is_finally_breaking_free_from_medical_stigma",
    ),
]


video_docs = [
    Document(
        source_file_directory="./documents/lgbtqia-videos/cnn/wanted_to_show_kids_it_is_ok_to_be_gay.md",
        destination_file_directory="./src/routes/documents/videos/wanted_to_show_kids_it_is_ok_to_be_gay/+page.md",
        replacements=None,
        attachment_folder_name=None
    ),
    Document(
        source_file_directory="./documents/lgbtqia-videos/storybooth/im_transgender.md",
        destination_file_directory="./src/routes/documents/videos/im_transgender/+page.md",
        replacements=None,
        attachment_folder_name=None
    ),
    Document(
        source_file_directory="./documents/lgbtqia-videos/doctor-youn/what-studies-say-about-transgender-gender-dysphoria-and-gender-affirming-care.md",
        destination_file_directory="./src/routes/documents/videos/what-studies-say-about-transgender-gender-dysphoria-and-gender-affirming-care/+page.md",
        replacements=None,
        attachment_folder_name=None
    ),
]

other_docs = [
    Document(
        source_file_directory="./documents/the-coming-out-handbook/README.md",
        destination_file_directory="./src/routes/documents/others/the-coming-out-handbook/+page.md",
        replacements=[
            ("./attachments", f"{path}/the-coming-out-handbook")],
        attachment_folder_name="the-coming-out-handbook"
    ),
    Document(
        source_file_directory="./documents/flags-of-the-lgbtqia-community/README.md",
        destination_file_directory="./src/routes/documents/others/flags-of-the-lgbtqia-community/+page.md",
        replacements=[
            ("./attachments", f"{path}/flags-of-the-lgbtqia-community")],
        attachment_folder_name="flags-of-the-lgbtqia-community"
    ),
]


def move_documents(docs: list[Document]):
    for doc in docs:
        destination_path_directory = os.path.dirname(
            doc["destination_file_directory"])
        os.makedirs(destination_path_directory, exist_ok=True)

        shutil.move(
            doc["source_file_directory"],
            doc["destination_file_directory"],
        )


move_documents(gender_docs)
move_documents(sexuality_docs)
move_documents(video_docs)
move_documents(other_docs)


def replace_text(docs: list[Document]):
    for doc in docs:
        if doc["replacements"] is None:
            continue

        with open(doc["destination_file_directory"], 'r', encoding='utf-8') as file:
            content = file.read()

        for prev, new in doc["replacements"]:
            content = content.replace(prev, new)

        with open(doc["destination_file_directory"], 'w', encoding='utf-8') as file:
            file.write(content)


replace_text(gender_docs)
replace_text(sexuality_docs)
replace_text(video_docs)
replace_text(other_docs)


def move_attachments(docs: list[Document]):
    for doc in docs:
        if doc["attachment_folder_name"] is None:
            continue

        prev_attachment_folder_directory = os.path.join(
            os.path.dirname(doc["source_file_directory"]), "attachments")
        new_attachment_folder_directory = os.path.join(
            "./static", doc["attachment_folder_name"])

        shutil.rmtree(new_attachment_folder_directory, ignore_errors=True)

        shutil.move(
            prev_attachment_folder_directory,
            new_attachment_folder_directory
        )


move_attachments(gender_docs)
move_attachments(sexuality_docs)
move_attachments(video_docs)
move_attachments(other_docs)


shutil.rmtree("./documents", ignore_errors=True)
